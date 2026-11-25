import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compila News — Em construção",
  description:
    "Estamos neste exato momento criando o Compila News, um lugar na internet para quem trabalha com tecnologia e precisa consumir conteúdos com valor concreto",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
