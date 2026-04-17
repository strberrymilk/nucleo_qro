import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginBody;

    if (!body.email || !body.password) {
      return NextResponse.json(
        { message: "Correo y contraseña son obligatorios." },
        { status: 400 },
      );
    }

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }

    return NextResponse.json({
      message: "Inicio de sesión exitoso.",
      redirectTo: "/cuenta",
      user: data.user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "No se pudo iniciar sesión.",
      },
      { status: 500 },
    );
  }
}
