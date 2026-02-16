import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TylerSong Blog",
    template: "%s | TylerSong Blog",
  },
  description: "개발, AI, 그리고 기술에 대한 이야기를 나눕니다.",
  openGraph: {
    title: "TylerSong Blog",
    description: "개발, AI, 그리고 기술에 대한 이야기를 나눕니다.",
    url: "https://alstjd0051.github.io",
    siteName: "TylerSong Blog",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
