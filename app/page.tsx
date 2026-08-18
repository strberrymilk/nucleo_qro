import Image from "next/image";
import GalleryCarousel from "@/components/GalleryCarousel";
import Navbar from "@/components/Navbar";

const DONATION_URL = "https://www.gofundme.com/es-mx";
const INSTAGRAM_URL = "https://www.instagram.com/nucleo_qro/";
const LINKEDIN_URL = "https://www.linkedin.com/";
const CONTACT_EMAIL = "mailto:nucleo.queretaro@gmail.com";

const sponsors = [
  "Tazas y pétalos",
  "Ride It / We Train",
  "SipSip!",
  "Corn Kings",
  "Alara accesorios",
  "Dogtainer",
  "Brioche",
];

const timeline = [
  { date: "Agosto 2024", text: "Comenzamos la planeación de Núcleo." },
  { date: "Enero 2025", text: "Hackathon Agustín Dorantes: se formalizó la idea." },
  { date: "Febrero 2025", text: "Primer día de clases e inicio del primer semestre." },
  { date: "Junio – Julio 2025", text: "Curso de verano." },
  { date: "Julio 2025", text: "Inicio del segundo semestre." },
  {
    date: "Octubre 2025",
    text: "Carrera Lazarus x Núcleo y Scholas Occurrentes x Núcleo.",
  },
  { date: "Diciembre 2025", text: "Graduación de la primera generación." },
  {
    date: "Febrero 2026",
    text: "Primer día de clases de la segunda generación.",
  },
];

const awards = [
  "Finalistas en la categoría de Educación del Premio Juventudes que Inspiran 2025 (PJI).",
  "Reconocidos en la Revista Líderes del Éxito como una de las organizaciones juveniles estatales más productivas.",
];

const partners = [
  {
    name: "TECHO México",
    logo: "/images/site/partners/techo.svg",
    circular: false,
  },
  {
    name: "Scholas MX",
    logo: "/images/site/partners/scholas.jpg",
    circular: false,
  },
  {
    name: "Lazarus",
    logo: "/images/site/partners/lazarus.jpeg",
    circular: true,
  },
  {
    name: "REU",
    logo: "/images/site/partners/reu.jpeg",
    circular: true,
  },
  {
    name: "Croissanto",
    logo: "/images/site/partners/croissanto.jpg",
    circular: false,
  },
  {
    name: "FETEC QRO",
    logo: "/images/site/partners/fetec.jpeg",
    circular: true,
  },
];

const galleryImages = Array.from({ length: 17 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    alt: `Galería Núcleo ${index + 1}`,
    src: `/images/site/gallery/gallery-${number}.jpg`,
  };
});

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative isolate min-h-[78vh] overflow-hidden bg-neutral text-white">
          <Image
            src="/images/site/hero/Hero1.png"
            alt="Niñas, niños y voluntariado de Núcleo"
            fill
            sizes="100vw"
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-neutral/45" />

          <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary font-[family-name:var(--font-heading)]">
              Proyecto educativo.
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight uppercase tracking-wider sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
              Bienvenidos a Núcleo
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white sm:text-xl font-[family-name:var(--font-body)]">
              Educación y comunidad para transformar las infancias.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-secondary rounded-md font-[family-name:var(--font-heading)]" href="#historia">
                Conoce nuestra historia
              </a>
              <a className="btn border-white bg-white/10 text-white hover:bg-white hover:text-neutral rounded-md font-[family-name:var(--font-heading)]" href="#donar">
                Súmate
              </a>
            </div>
          </div>
        </section>

        <section id="historia" className="bg-base-100 px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div className="text-justify">
              <h2 className="text-3xl font-bold uppercase tracking-wider text-primary font-[family-name:var(--font-heading)]">
                Nuestra historia
              </h2>
              <p className="mt-5 text-lg leading-8 text-base-content font-[family-name:var(--font-body)]">
                Núcleo nació dentro del ILO Project del programa <b>Eugenio Garza Sada
                Leadership Program</b>, del Tecnológico de Monterrey, Campus Querétaro.
                Cuatro estudiantes del programa —Cecy, Estrella, Dani e Isra— y un
                alumno de intercambio —Bodhi— encontraron una causa en común: la
                <b> educación en contextos de vulnerabilidad</b> y el papel fundamental de
                la <b>familia en el desarrollo de niñas, niños y adolescentes</b>.
              </p>
              <p className="mt-5 text-lg leading-8 text-base-content font-[family-name:var(--font-body)]">
                En agosto de 2024 Núcleo nace como proyecto en planeación, y el 22
                de febrero de 2025 ocurrió la primera clase en la comunidad de El
                Chamizal, en Querétaro. A partir de la escucha activa y el trabajo
                cercano con las familias, fuimos construyendo un <b>modelo propio que
                integra educación, acompañamiento familiar y desarrollo
                comunitario</b>.
              </p>
              <p className="mt-5 text-lg leading-8 text-base-content font-[family-name:var(--font-body)]">
                Hoy, Núcleo es más que un programa: es una comunidad que aprende,
                colabora y se transforma desde dentro.
              </p>
            </div>
            {/* Espacio para imagen */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-base-300 bg-base-200 text-sm font-semibold uppercase tracking-wide text-base-content/40 font-[family-name:var(--font-heading)]">
              Imagen
            </div>
          </div>
        </section>

        <section id="timeline" className="bg-base-100 px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-primary font-[family-name:var(--font-heading)]">
              Núcleo a través del tiempo
            </h2>
            <div className="mt-10 overflow-x-auto pb-4">
              <ul className="timeline timeline-vertical lg:timeline-horizontal">
                {timeline.map((item, index) => (
                  <li key={item.date}>
                    {index > 0 && <hr className="bg-primary/40" />}
                    <div className="timeline-start text-lg font-bold text-primary font-[family-name:var(--font-body)]">
                      {item.date}
                    </div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box max-w-[16rem] border border-base-300 bg-base-200 text-base leading-7 font-[family-name:var(--font-body)]">
                      {item.text}
                    </div>
                    {index < timeline.length - 1 && <hr className="bg-primary/40" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="comunidad" className="bg-accent px-6 py-16 text-accent-content">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            {/* Espacio para imagen */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-accent-content/30 bg-accent-content/10 text-sm font-semibold uppercase tracking-wide text-accent-content/60 font-[family-name:var(--font-heading)]">
              Imagen
            </div>
            <div className="text-justify">
              <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Dónde estamos
              </h2>
              <p className="mt-5 text-lg leading-8 font-[family-name:var(--font-body)]">
                Núcleo trabaja en <b>“El Chamizal”</b>, un asentamiento popular del
                municipio de Querétaro. En esta comunidad, <b>TECHO México</b> ha
                trabajado durante años, principalmente en proyectos de construcción
                de vivienda, y fue a través de dicha organización que tuvimos los
                primeros acercamientos con la lideresa comunitaria Miriam, y con
                las vecinas y vecinos.
              </p>
              <p className="mt-5 text-lg leading-8 font-[family-name:var(--font-body)]">
                El Chamizal enfrenta retos relacionados con el acceso a servicios
                básicos, la calidad de la vivienda y la falta de pavimentación,
                entre otros. Sabemos que los problemas van más allá de lo material,
                por eso Núcleo forma parte del <b>Programa de Fortalecimiento
                Escolar</b> de TECHO: somos el resultado de la colaboración
                institucional al servicio de la comunidad.
              </p>
            </div>
          </div>
        </section>

        <section id="mision" className="bg-secondary px-6 py-16 text-secondary-content">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Misión
              </h2>
              <p className="mt-5 text-lg leading-8 text-justify text-base-content font-[family-name:var(--font-body)]">
                Empoderar
                a niñas, niños y adolescentes de comunidades en situación de
                vulnerabilidad, potenciando sus capacidades a través de la <b>Teoría
                de las Inteligencias Múltiples</b>. Mediante el fortalecimiento
                académico y socioemocional, y el acompañamiento a madres y padres,
                trabajamos para consolidar núcleos familiares más sólidos y
                comunidades más justas.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Visión
              </h2>
              <p className="mt-5 text-lg leading-8 text-justify text-base-content font-[family-name:var(--font-body)]">
                Un mundo donde todas las niñas, niños y adolescentes,
                especialmente quienes están en situación de vulnerabilidad,
                tengan acceso a <b>oportunidades equitativas para desarrollar
                plenamente su potencial</b>. Visualizamos comunidades fortalecidas,
                familias acompañadas y entornos más justos e inclusivos, donde
                cada persona contribuya a un futuro sostenible, próspero y
                solidario.
              </p>
            </div>
          </div>
        </section>

        <section id="actividades" className="bg-base-100 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-primary font-[family-name:var(--font-heading)]">¿Qué hacemos todos los sábados?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-justify text-base-content font-[family-name:var(--font-body)]">
              <b>Todos los sábados</b>, de 12:00 a 2:00 p.m., acudimos a El Chamizal para
              desarrollar sesiones educativas basadas en la teoría de las
              Inteligencias Múltiples de Howard Gardner. Diseñamos experiencias de
              aprendizaje que fortalecen tanto habilidades blandas —comunicación,
              trabajo en equipo, empatía y autorregulación— como habilidades duras
              —pensamiento lógico, lectoescritura y resolución de problemas—, en
              espacios seguros que retan la creatividad y estimulan el pensamiento
              crítico.
            </p>
          </div>
        </section>

        <section id="programas" className="bg-secondary px-6 py-16 text-secondary-content">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Curso de verano
              </h2>
              <p className="mt-5 text-lg leading-8 text-justify font-[family-name:var(--font-body)]">
                Durante el verano impartimos sesiones de 12:00 a 2:00 p.m.
                enfocadas en fortalecer las <b>habilidades lógico-matemáticas y
                lingüístico-verbales</b>. A través de talleres lúdicos, creativos y
                participativos trabajamos la lectura, la escritura y el
                pensamiento matemático, despertando la curiosidad por aprender.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Escuela para padres
              </h2>
              <p className="mt-5 text-lg leading-8 text-justify font-[family-name:var(--font-body)]">
                Este es un programa formativo integral que parte de las
                inquietudes y necesidades de las propias familias para fortalecer
                el <b>liderazgo comunitario, la comunicación familiar y la crianza
                respetuosa</b>. Aborda temas prácticos como bienestar y salud,
                orientación legal básica y economía familiar. Es también
                un <b>espacio seguro de encuentro</b> que fortalece redes de
                apoyo y confianza entre familias.
              </p>
            </div>
          </div>
        </section>

        <section id="aliados" className="bg-accent px-6 py-16 text-accent-content">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">Aliados</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {partners.map((partner) => (
                <div
                  className="flex min-h-36 items-center justify-center"
                  key={partner.name}
                >
                  {partner.circular ? (
                    <div className="aspect-square w-24 overflow-hidden rounded-full">
                      <Image
                        src={partner.logo}
                        alt={`Logo de ${partner.name}`}
                        width={160}
                        height={160}
                        className="h-full w-full scale-105 object-cover"
                      />
                    </div>
                  ) : (
                    <Image
                      src={partner.logo}
                      alt={`Logo de ${partner.name}`}
                      width={220}
                      height={140}
                      className="h-24 w-full max-w-36 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Patrocinadores de rifa
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {sponsors.map((sponsor) => (
                <span
                  key={sponsor}
                  className="rounded-full bg-accent-content/10 px-4 py-2 text-sm font-semibold font-[family-name:var(--font-body)]"
                >
                  {sponsor}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="premios" className="bg-secondary px-6 py-16 text-secondary-content">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Premios y reconocimientos
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-justify font-[family-name:var(--font-body)]">
              El trabajo de Núcleo ha sido reconocido en distintos espacios que
              impulsan el liderazgo juvenil y la innovación social.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {awards.map((award) => (
                <div
                  key={award}
                  className="flex items-start gap-4 rounded-lg bg-secondary-content/10 p-6"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary-content text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12 2 9.9 8.6H3l5.6 4-2.1 6.6L12 15.2l5.5 4-2.1-6.6 5.6-4h-6.9L12 2Z" />
                    </svg>
                  </span>
                  <p className="text-lg leading-8 text-justify font-[family-name:var(--font-body)]">
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fotos" className="bg-base-100 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-primary font-[family-name:var(--font-heading)]">Galería</h2>
            <GalleryCarousel images={galleryImages} />
          </div>
        </section>

        <section id="noticias-cta" className="bg-primary px-6 py-16 text-primary-content">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-heading)]">
                ¿Qué hay de nuevo en Núcleo?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 font-[family-name:var(--font-body)]">
                Entérate de nuestros eventos, participaciones y actividades más
                recientes con la comunidad de El Chamizal.
              </p>
            </div>
            <a
              className="btn btn-secondary rounded-md font-[family-name:var(--font-heading)]"
              href="/noticias"
            >
              Ver noticias
            </a>
          </div>
        </section>

        <section id="donar" className="bg-base-100 px-6 py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider text-primary font-[family-name:var(--font-heading)]">Dona</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 font-[family-name:var(--font-body)]">
                Tu apoyo ayuda a sostener sesiones, materiales y experiencias
                educativas para niñas, niños y adolescentes.
              </p>
            </div>
            <a
              className="btn btn-primary rounded-md font-[family-name:var(--font-heading)]"
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero donar
            </a>
          </div>
        </section>
      </main>

      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title font-[family-name:var(--font-heading)]">Núcleo</h6>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#historia">
            Historia
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#comunidad">
            Comunidad
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#mision">
            Misión & Visión
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#aliados">
            Aliados
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#fotos">
            Galería
          </a>
        </nav>
        <nav>
          <h6 className="footer-title font-[family-name:var(--font-heading)]">Programas</h6>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#actividades">
            Sesiones educativas
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#programas">
            Curso de verano
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="#programas">
            Escuela para padres
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="/noticias">
            Noticias
          </a>
        </nav>
        <nav>
          <h6 className="footer-title font-[family-name:var(--font-heading)]">Participa</h6>
          <a
            className="link link-hover font-[family-name:var(--font-body)]"
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dona
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href="/ingresar">
            Ingresar
          </a>
          <a className="link link-hover font-[family-name:var(--font-body)]" href={CONTACT_EMAIL}>
            Contacto
          </a>
          <a
            className="link link-hover font-[family-name:var(--font-body)]"
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero donar
          </a>
        </nav>
      </footer>
      <footer className="footer bg-neutral text-neutral-content border-neutral-content/20 border-t px-10 py-4">
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
            <a
              aria-label="LinkedIn de Núcleo"
              href={LINKEDIN_URL}
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
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.7h4v11.8H3V9.7Zm6.2 0H13v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.1h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5h-4V9.7Z" />
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
