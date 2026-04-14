"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Núcleo</div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
        <ul className={`nav-links${menuOpen ? " active" : ""}`}>
          <li><a href="#historia" onClick={() => setMenuOpen(false)}>Historia</a></li>
          <li><a href="#mision" onClick={() => setMenuOpen(false)}>Misión &amp; Visión</a></li>
          <li><a href="#actividades" onClick={() => setMenuOpen(false)}>Actividades</a></li>
          <li><a href="#aliados" onClick={() => setMenuOpen(false)}>Aliados</a></li>
          <li><a href="#fotos" onClick={() => setMenuOpen(false)}>Fotos</a></li>
          <li><a href="#eventos" onClick={() => setMenuOpen(false)}>Eventos</a></li>
        </ul>
      </nav>
    </header>
  );
}
