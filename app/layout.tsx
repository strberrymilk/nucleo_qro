import type { Metadata } from "next";
import { Fredoka, Space_Mono, Lora, Poppins, Inter } from "next/font/google";
import "./globals.css";

const fontSans = Fredoka({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

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
      <body className={`${fontSans.variable} ${fontMono.variable} ${lora.variable} ${poppins.variable} ${inter.variable} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}

