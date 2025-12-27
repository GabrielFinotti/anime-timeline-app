import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/css/globals.css";
import Navbar from "../components/common/Navbar";

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
      <body className="bg-dark-900 min-h-screen text-neutral-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
