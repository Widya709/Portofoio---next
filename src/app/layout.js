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

export const metadata = {
  title: "Widya Aulia - Portofolio",
  description: "Portofolio Widya Aulia, Siswi Kelas XI SMK Jurusan Rekayasa Perangkat Lunak, calon Junior Web Developer Kelas Industri UBIG.",
};
  
// di dalam return, pada tag <html> lang="id"
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-later text-gray-800">{children}</body>
    </html>
  );
}
