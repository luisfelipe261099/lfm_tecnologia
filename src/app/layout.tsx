import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LFM Tecnologia | Inovação e Soluções Digitais",
  description: "Transformamos ideias em soluções digitais de alto impacto. Especialistas em sites, sistemas e marketing digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
