import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Timeline",
  description: "Organize sua lista de animes e crie sua linha de tempo personalizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
