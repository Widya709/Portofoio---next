import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-7xl font-bold text-utama dark:text-sky-200">404</p>
      <h1 className="mt-4 text-2xl font-bold text-utama dark:text-sky-200">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Maaf, alamat yang kamu buka tidak tersedia.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-utama px-5 py-3 font-semibold text-white hover:opacity-90"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
