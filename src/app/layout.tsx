import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/css/globals.css";

export const metadata: Metadata = {
  title: "Anime Timeline",
  description: "Organize sua lista de animes e crie sua linha de tempo personalizada.",
};

const Nunito = localFont({
  src: "../../public/fonts/Nunito.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={Nunito.className}>
      <body>{children}</body>
    </html>
  );
}
