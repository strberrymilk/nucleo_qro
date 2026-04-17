-- Run this in Supabase Dashboard > SQL Editor.
-- It creates the data layer used by the Nucleo login/signup flow.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_names text,
  last_names text,
  email text unique,
  age integer,
  gender text,
  city text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.school_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  first_names text not null,
  last_names text not null,
  email text not null,
  age integer not null check (age >= 16),
  gender text not null,
  city text not null,
  school_address text not null,
  motivation text not null,
  status text not null default 'pending' check (
    status in ('pending', 'reviewing', 'approved', 'rejected')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists school_requests_set_updated_at on public.school_requests;
create trigger school_requests_set_updated_at
before update on public.school_requests
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    first_names,
    last_names,
    email,
    age,
    gender,
    city
  )
  values (
    new.id,
    new.raw_user_meta_data ->> 'first_names',
    new.raw_user_meta_data ->> 'last_names',
    new.email,
    nullif(new.raw_user_meta_data ->> 'age', '')::integer,
    new.raw_user_meta_data ->> 'gender',
    new.raw_user_meta_data ->> 'city'
  )
  on conflict (id) do update set
    first_names = excluded.first_names,
    last_names = excluded.last_names,
    email = excluded.email,
    age = excluded.age,
    gender = excluded.gender,
    city = excluded.city,
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.school_requests enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Users can read own school requests" on public.school_requests;
create policy "Users can read own school requests"
on public.school_requests
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can create own school requests" on public.school_requests;
create policy "Users can create own school requests"
on public.school_requests
for insert
to authenticated
with check (auth.uid() = user_id);
