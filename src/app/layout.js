import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: {
    default: "Widya Aulia | Portofolio",
    template: "%s | Widya Aulia",
  },
  description: "Portofolio Widya Aulia, Siswi Kelas XI SMK Jurusan Rekayasa Perangkat Lunak, calon Junior Web Developer Kelas Industri UBIG.",
};
  
export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
