import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Timeline",
  description: "An app to organize and visualize your anime list",
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
