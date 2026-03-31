import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Alpiurb | Manutenção de Edifícios por Cordas',
  description: 'Especialistas em manutenção e inspeção de fachadas por acesso por cordas. Serviços de limpeza, reparação e selagem em altura. Porto, Lisboa e Norte de Portugal.',
  keywords: [
    'manutenção de edifícios',
    'acesso por cordas',
    'trabalho em altura',
    'limpeza de fachadas',
    'inspeção de fachadas',
    'reparação de fachadas',
    'IRATA',
    'Porto',
    'Lisboa',
    'Portugal',
    'Alpinistas',
    'Trabalhos por Cordas',
    'Reparar',
    'Sem Andaimes'
  ],
  authors: [{ name: 'Alpiurb' }],
  openGraph: {
    title: 'Alpiurb | Manutenção de Edifícios por Cordas',
    description: 'Especialistas em manutenção e inspeção de fachadas por acesso por cordas em Portugal.',
    url: 'https://www.alpiurb.pt',
    siteName: 'Alpiurb',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: '/Grande_Escala_1.jpeg', width: 1200, height: 630, alt: 'Alpiurb - Trabalho em altura' }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.alpiurb.pt' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}