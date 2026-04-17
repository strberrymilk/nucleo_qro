import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type SchoolRequest = {
  city: string;
  created_at: string;
  id: string;
  motivation: string;
  school_address: string;
  status: string;
};

export default async function CuentaPage() {
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();

  if (!claimsData?.claims) {
    redirect("/ingresar");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/ingresar");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("first_names,last_names,email,city")
    .eq("id", user.id)
    .maybeSingle();

  const { data: requests } = await supabase
    .from("school_requests")
    .select("id,city,school_address,motivation,status,created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .returns<SchoolRequest[]>();

  const displayName = profile
    ? `${profile.first_names} ${profile.last_names}`
    : user.email;

  return (
    <main className="min-h-screen bg-base-100 px-6 py-10">
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link className="link link-hover text-sm font-bold text-primary" href="/">
              Volver a Núcleo
            </Link>
            <h1 className="mt-4 text-4xl font-bold">Cuenta</h1>
            <p className="mt-2 text-base-content/70">
              Hola, {displayName}. Aquí puedes revisar tus solicitudes.
            </p>
          </div>

          <form action="/auth/signout" method="post">
            <button className="btn btn-outline rounded-md shadow-none" type="submit">
              Cerrar sesión
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-md border border-base-300 bg-base-200 p-6">
            <h2 className="text-2xl font-bold">Perfil</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-bold text-base-content">Nombre</dt>
                <dd className="mt-1 text-base-content/75">{displayName}</dd>
              </div>
              <div>
                <dt className="font-bold text-base-content">Correo</dt>
                <dd className="mt-1 text-base-content/75">{user.email}</dd>
              </div>
              {profile?.city && (
                <div>
                  <dt className="font-bold text-base-content">Ciudad</dt>
                  <dd className="mt-1 text-base-content/75">{profile.city}</dd>
                </div>
              )}
            </dl>
          </article>

          <article className="rounded-md border border-base-300 bg-base-200 p-6">
            <h2 className="text-2xl font-bold">Solicitudes de escuela</h2>

            {requests && requests.length > 0 ? (
              <div className="mt-5 space-y-4">
                {requests.map((request) => (
                  <div
                    className="rounded-md border border-base-300 bg-base-100 p-4"
                    key={request.id}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-bold">{request.city}</h3>
                      <span className="badge badge-primary rounded-md">
                        {request.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold">
                      {request.school_address}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-base-content/75">
                      {request.motivation}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-5 text-base-content/70">
                Todavía no hay solicitudes ligadas a esta cuenta.
              </p>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
