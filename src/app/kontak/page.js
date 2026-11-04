
export const metadata = {
  title: "Kontak",
  description: "Hubungi Widya Aulia melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-2 text-base leading-relaxed text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Hubungi saya dengan mengisi
        formulir di bawah.
      </p>

      <div className="mt-2 grid items-start gap-5 md:grid-cols-3">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2">
          <form className="space-y-4">
            <div>
              <label htmlFor="nama" className="block font-semibold text-gray-800">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Contoh: Widya Aulia"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-2.5 py-2 text-gray-900 placeholder:text-gray-400 focus:border-aksen focus:outline-none focus:ring-2 focus:ring-aksen/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Contoh: user@gmail.com"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-2.5 py-2 text-gray-900 placeholder:text-gray-400 focus:border-aksen focus:outline-none focus:ring-2 focus:ring-aksen/20"
              />
            </div>

            <div>
              <label htmlFor="telepon" className="block font-semibold text-gray-800">
                Nomor HP
              </label>
              <input
                type="tel"
                id="telepon"
                name="telepon"
                placeholder="Contoh: +62 xxx-xxx-xxx"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-2.5 py-2 text-gray-900 placeholder:text-gray-400 focus:border-aksen focus:outline-none focus:ring-2 focus:ring-aksen/20"
              />
            </div>

            <div>
              <label htmlFor="keperluan" className="block font-semibold text-gray-800">
                Keperluan
              </label>
              <select
                id="keperluan"
                name="keperluan"
                defaultValue=""
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-2.5 py-2 text-gray-700 focus:border-aksen focus:outline-none focus:ring-2 focus:ring-aksen/20"
              >
                <option value="" disabled>
                  -- Pilih Keperluan --
                </option>
                <option value="pertanyaan">Pertanyaan</option>
                <option value="kerja-sama">Kerja sama</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block font-semibold text-gray-800">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                maxLength={300}
                placeholder="Tulis pesanmu di sini"
                required
                className="mt-1 w-full resize-y rounded-lg border border-gray-300 bg-white px-2.5 py-2 text-gray-900 placeholder:text-gray-400 focus:border-aksen focus:outline-none focus:ring-2 focus:ring-aksen/20"
              />
            </div>

            <p className="text-sm text-gray-500">
              Formulir ini belum mengirim pesan.
            </p>
          </form>
        </section>

        <section className="min-h-72 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-utama">
            Temukan Saya di
          </h2>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a
                href="https://github.com/Widya709"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-aksen hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto:widyaaulia709@gmail.com"
                className="break-all text-aksen hover:underline"
              >
                widyaaulia709@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
