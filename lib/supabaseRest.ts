type SupabaseConfig = {
  anonKey: string;
  serviceRoleKey: string;
  url: string;
};

export function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

  if (!url || !anonKey) {
    return null;
  }

  return {
    anonKey,
    serviceRoleKey,
    url: url.replace(/\/$/, ""),
  };
}

export async function readSupabaseError(response: Response) {
  try {
    const payload = await response.json();

    return (
      payload.error_description ??
      payload.msg ??
      payload.message ??
      "No se pudo completar la solicitud."
    );
  } catch {
    return "No se pudo completar la solicitud.";
  }
}
