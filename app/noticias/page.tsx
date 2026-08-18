import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const INSTAGRAM_URL = "https://www.instagram.com/nucleo_qro/";
const CONTACT_EMAIL = "mailto:nucleo.queretaro@gmail.com";

export const metadata: Metadata = {
  title: "Noticias - Núcleo",
  description: "Novedades, eventos y actividades de Núcleo en El Chamizal.",
};

type NewsItem = {
  title: string;
  tag: string;
  date: string;
  description: string;
};

const news: NewsItem[] = [
  {
    title: "Posada Navideña Comunitaria",
    tag: "Evento",
    date: "Diciembre 2025",
    description:
      "Organizamos una posada para las niñas y niños de la comunidad, con rally, juegos colaborativos, dinámicas recreativas y piñatas. Más que un evento festivo, fue un momento de integración y fortalecimiento del sentido de comunidad.",
  },
  {
    title: "Carrera con Causa con Lazarus",
    tag: "Recaudación",
    date: "Octubre 2025",
    description:
      "Junto a Lazarus impulsamos una carrera que reunió a juventudes comprometidas con el impacto social. El objetivo fue recaudar útiles escolares para nuestras y nuestros estudiantes, fomentando la participación activa, la solidaridad y una red de apoyo más amplia.",
  },
  {
    title: "Hackathon Legislativo",
    tag: "Participación",
    date: "Enero 2025",
    description:
      "Participamos en el Hackathon organizado por el senador Agustín Dorantes, llevando la visión social y educativa de Núcleo a un espacio de innovación y propuestas con impacto público. Esta experiencia nos permitió posicionar el proyecto en espacios de diálogo y desarrollo de soluciones.",
  },
  {
    title: "Hult Prize",
    tag: "Reconocimiento",
    date: "2025",
    description:
      "Formamos parte del Hult Prize, una de las competencias universitarias de emprendimiento social más importantes a nivel internacional. Nuestra participación reafirma nuestro compromiso con la innovación social y el desarrollo de soluciones sostenibles enfocadas en la transformación comunitaria.",
  },
];

export default function NoticiasPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-neutral px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary font-[family-name:var(--font-heading)]">
              Novedades
            </p>
            <h1 className="text-4xl font-bold uppercase tracking-wider sm:text-5xl font-[family-name:var(--font-heading)]">
              Noticias
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/90 font-[family-name:var(--font-body)]">
              Eventos, participaciones y actividades que construimos junto a la
              comunidad de El Chamizal.
            </p>
          </div>
        </section>

        <section className="bg-base-100 px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {news.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-md border border-base-300 bg-base-200 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-content font-[family-name:var(--font-heading)]">
                    {item.tag}
                  </span>
                  <span className="text-sm text-base-content/70 font-[family-name:var(--font-body)]">
                    {item.date}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold uppercase tracking-wide text-primary font-[family-name:var(--font-heading)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg leading-8 text-justify text-base-content font-[family-name:var(--font-body)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer bg-neutral text-neutral-content border-neutral-content/20 border-t px-10 py-6">
        <aside className="grid-flow-col items-center">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-base-300 bg-base-100 text-sm font-bold text-primary font-[family-name:var(--font-heading)]">
            N
          </span>
          <p className="font-[family-name:var(--font-body)]">
            Núcleo - Proyecto Educativo
            <br />
            Educación y comunidad para transformar.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              aria-label="Instagram de Núcleo"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a aria-label="Correo de Núcleo" href={CONTACT_EMAIL}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 4.2V18h16V8.2l-7.4 5.1a1 1 0 0 1-1.2 0L4 8.2ZM4.8 6l7.2 5 7.2-5H4.8Z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
