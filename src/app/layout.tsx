import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "RETO UPPEREAT",
  description: "Sistema de Gestión de Reservas para Restaurantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} mx-auto`}>
        {children}
      </body>
    </html>
  );
}
