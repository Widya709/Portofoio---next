import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00 - 20.30",
    kegiatan: "Mempelajari materi UBIG",
  },
  {
    hari: "Selasa",
    waktu: "19.00 - 20.15",
    kegiatan: "Mengerjakan tugas UBIG",
  },
  {
    hari: "Rabu",
    waktu: "18.00 - 21.15",
    kegiatan: "Mengerjakan tugas UBIG",
  },
  {
    hari: "Kamis",
    waktu: "19.00 - 20.30",
    kegiatan: "Mengerjakan tugas sekolah",
  },
  {
    hari: "Jumat",
    waktu: "19.00 - 20.30",
    kegiatan: "Mengerjakan tugas sekolah",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <Hero
        nama="Rismaeka Mei Saro"
        tagline="Siswi kelas XI SMK jurusan Rekayasa Perangkat Lunak yang tertarik dengan dunia teknologi."
      />

      {/* Tentang Saya */}
      <section className="mt-8 w-full min-w-0 rounded-xl bg-white p-4 shadow-sm sm:mt-10 sm:p-6">
        <h2 className="mb-3 break-words text-xl font-bold text-utama sm:text-2xl">
          Tentang Saya
        </h2>
        <p className="break-words text-sm leading-relaxed text-slate-600">
          Halo! Saya Rismaeka Mei Saro, siswi kelas XI RPL 1
          jurusan Rekayasa Perangkat Lunak (RPL). Saya senang
          belajar hal baru dan tertarik mengembangkan pengetahuan
          serta keterampilan di bidang teknologi.
        </p>
      </section>

      {/* Hobi dan Cita-cita */}
      <section className="mt-5 grid w-full min-w-0 grid-cols-1 gap-4 md:mt-6 md:grid-cols-2">
        {/* Hobi */}
        <div className="min-w-0 rounded-xl bg-white p-4 shadow-sm sm:p-5">
          <h2 className="mb-3 break-words text-xl font-bold text-utama">
            Hobi
          </h2>
          <ul className="list-disc break-words pl-5 text-sm leading-relaxed text-slate-600">
            <li>Belajar</li>
            <li>Membaca</li>
            <li>Berenang</li>
          </ul>
        </div>

        {/* Cita-cita */}
        <div className="min-w-0 rounded-xl bg-white p-4 shadow-sm sm:p-5">
          <h2 className="mb-3 break-words text-xl font-bold text-utama">
            Cita-cita
          </h2>
          <p className="break-words text-sm leading-relaxed text-slate-600">
            Menjadi pejabat yang bertanggung jawab dan dapat
            memberikan kontribusi positif bagi masyarakat.
          </p>
        </div>
      </section>

      {/* Keahlian */}
      <section className="mt-8 w-full min-w-0 sm:mt-10">
        <h2 className="mb-4 break-words text-xl font-bold text-utama sm:text-2xl">
          Keahlian
        </h2>
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      {/* Jadwal Kegiatan UBIG */}
      <section className="mt-6 w-full min-w-0 rounded-xl bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 break-words text-xl font-bold text-utama sm:text-2xl">
          Jadwal Kegiatan UBIG
        </h2>

        <div className="w-full min-w-0 overflow-x-auto">
          <table className="w-full min-w-[440px] border-collapse text-left text-sm text-slate-600">
            <thead>
              <tr className="bg-sky-950 text-white">
                <th scope="col" className="px-3 py-3 sm:px-4">
                  Hari
                </th>
                <th scope="col" className="px-3 py-3 sm:px-4">
                  Waktu
                </th>
                <th scope="col" className="px-3 py-3 sm:px-4">
                  Kegiatan
                </th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item) => (
                <tr key={item.hari}>
                  <td className="border px-3 py-3 sm:px-4">
                    {item.hari}
                  </td>
                  <td className="whitespace-nowrap border px-3 py-3 sm:px-4">
                    {item.waktu}
                  </td>
                  <td className="border px-3 py-3 sm:px-4">
                    {item.kegiatan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="mt-6 rounded-md bg-sky-950 px-3 py-4 text-center text-xs leading-relaxed text-white sm:text-sm">
        {new Date().getFullYear()} Rismaeka Mei Saro | Dibuat dengan Next.js |
        Kelas Industri UBIG
      </footer>
    </main>
  );
}
