import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <Image
          src="/Hero1.png"
          alt="Imagen principal Núcleo"
          width={800}
          height={400}
          className="section-img"
          priority
        />
        <h1>Bienvenidos a Núcleo</h1>
        <p>Educación y comunidad para transformar El Chamizal</p>
        <a href="#historia" className="btn">Conoce nuestra historia</a>
      </section>

      {/* Historia */}
      <section id="historia">
        <div className="section">
          <h2>Historia de Núcleo</h2>
          <p>
            Núcleo fue creado a través del ILO Project del Eugenio Garza Sada
            Leadership Program. Nació con la misión de transformar la comunidad
            de El Chamizal mediante la educación y el acompañamiento integral.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section id="mision" className="section-wrapper-alt">
        <div className="section">
          <h2>Misión &amp; Visión</h2>
          <p>
            <strong>Misión:</strong> Empoderar a niños, niñas y adolescentes
            de El Chamizal a través de la educación, el arte y el deporte,
            fomentando valores y habilidades para la vida.
          </p>
          <p>
            <strong>Visión:</strong> Un mundo donde todos tengan acceso a
            oportunidades equitativas, comenzando por nuestra comunidad.
          </p>
        </div>
      </section>

      {/* Actividades */}
      <section id="actividades">
        <div className="section">
          <h2>¿Qué hacemos?</h2>
          <ul>
            <li>Sesiones educativas cada sábado</li>
            <li>Curso de verano</li>
            <li>Escuela para padres</li>
          </ul>
        </div>
      </section>

      {/* Aliados */}
      <section id="aliados" className="section-wrapper-alt">
        <div className="section">
          <h2>Aliados &amp; Patrocinadores</h2>
          <div className="grid">
            <div>TECHO México</div>
            <div>Scholas MX</div>
            <div>Lazarus/REU</div>
            <div>Croissanto</div>
            <div>FETEC QRO</div>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section id="fotos">
        <div className="section">
          <h2>Galería</h2>
          <div className="gallery">
            <a
              href="https://drive.google.com/drive/folders/1cQ_0P_7yb0_kS9-_3WeTNCYDnXrLH40k?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clases 2025
            </a>
            <a
              href="https://drive.google.com/drive/folders/1xMJy5Vpq7vD0ResyxU98HsCx-8mx_Aud?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clases 2026
            </a>
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section id="eventos" className="section-wrapper-alt">
        <div className="section">
          <h2>Eventos</h2>
          <p>
            Posada Navideña Comunitaria, Carrera con Causa, Hackathon
            Legislativo, Hult Prize, y más actividades comunitarias a lo largo
            del año.
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Núcleo - Proyecto Educativo</p>
      </footer>
    </>
  );
}
