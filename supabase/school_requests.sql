create table if not exists public.school_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  first_names text not null,
  last_names text not null,
  email text not null,
  age integer not null,
  gender text not null,
  city text not null,
  school_address text not null,
  motivation text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);
