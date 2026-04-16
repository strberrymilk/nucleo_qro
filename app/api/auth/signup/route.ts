import { NextResponse } from "next/server";
import { getSupabaseConfig, readSupabaseError } from "@/lib/supabaseRest";

type SignupBody = {
  age?: number;
  city?: string;
  email?: string;
  firstNames?: string;
  gender?: string;
  lastNames?: string;
  motivation?: string;
  password?: string;
  schoolAddress?: string;
};

const requiredFields: Array<keyof SignupBody> = [
  "firstNames",
  "lastNames",
  "email",
  "password",
  "age",
  "gender",
  "city",
  "schoolAddress",
  "motivation",
];

export async function POST(request: Request) {
  const body = (await request.json()) as SignupBody;
  const missingField = requiredFields.find((field) => !body[field]);

  if (missingField) {
    return NextResponse.json(
      { message: "Completa todos los campos para crear la cuenta." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseConfig();

  if (!supabase) {
    return NextResponse.json({
      demo: true,
      message:
        "Modo demo: la cuenta y solicitud se simularon. Configura Supabase para guardar usuarios y solicitudes.",
    });
  }

  const signupResponse = await fetch(`${supabase.url}/auth/v1/signup`, {
    method: "POST",
    headers: {
      apikey: supabase.anonKey,
      Authorization: `Bearer ${supabase.anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body.email,
      password: body.password,
      data: {
        age: body.age,
        city: body.city,
        first_names: body.firstNames,
        gender: body.gender,
        last_names: body.lastNames,
        school_address: body.schoolAddress,
      },
    }),
  });

  if (!signupResponse.ok) {
    return NextResponse.json(
      { message: await readSupabaseError(signupResponse) },
      { status: signupResponse.status },
    );
  }

  const signup = await signupResponse.json();
  const databaseKey = supabase.serviceRoleKey || supabase.anonKey;

  const requestResponse = await fetch(`${supabase.url}/rest/v1/school_requests`, {
    method: "POST",
    headers: {
      apikey: databaseKey,
      Authorization: `Bearer ${databaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      age: body.age,
      city: body.city,
      email: body.email,
      first_names: body.firstNames,
      gender: body.gender,
      last_names: body.lastNames,
      motivation: body.motivation,
      school_address: body.schoolAddress,
      user_id: signup.user?.id ?? null,
    }),
  });

  if (!requestResponse.ok) {
    return NextResponse.json(
      {
        message:
          "La cuenta se creó, pero no se pudo guardar la solicitud de escuela. Revisa la tabla school_requests en Supabase.",
        details: await readSupabaseError(requestResponse),
      },
      { status: requestResponse.status },
    );
  }

  return NextResponse.json({
    message:
      "Cuenta creada. Revisa tu correo para confirmar el acceso y dar seguimiento a la solicitud.",
  });
}
