import { NextResponse } from "next/server";
import { getSupabaseConfig } from "@/lib/supabaseRest";

export async function GET(request: Request) {
  const supabase = getSupabaseConfig();
  const origin = new URL(request.url).origin;

  if (!supabase) {
    return NextResponse.redirect(
      new URL("/ingresar?message=google-demo", origin),
    );
  }

  const redirectTo = encodeURIComponent(`${origin}/ingresar`);
  const authUrl = `${supabase.url}/auth/v1/authorize?provider=google&redirect_to=${redirectTo}`;

  return NextResponse.redirect(authUrl);
}
