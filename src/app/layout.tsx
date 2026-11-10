import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

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
      <body className={`${jakarta.variable} ${orbitron.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
