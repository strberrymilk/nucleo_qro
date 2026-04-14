import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Núcleo - Proyecto Educativo",
  description: "Educación y comunidad para transformar El Chamizal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
