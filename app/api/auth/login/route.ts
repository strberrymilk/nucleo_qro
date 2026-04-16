import { NextResponse } from "next/server";
import { getSupabaseConfig, readSupabaseError } from "@/lib/supabaseRest";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;

  if (!body.email || !body.password) {
    return NextResponse.json(
      { message: "Correo y contraseña son obligatorios." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseConfig();

  if (!supabase) {
    return NextResponse.json({
      demo: true,
      message:
        "Modo demo: con NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY este login autentica contra Supabase.",
    });
  }

  const response = await fetch(`${supabase.url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: supabase.anonKey,
      Authorization: `Bearer ${supabase.anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body.email,
      password: body.password,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: await readSupabaseError(response) },
      { status: response.status },
    );
  }

  const session = await response.json();

  return NextResponse.json({
    message: "Inicio de sesión exitoso.",
    user: session.user,
  });
}
