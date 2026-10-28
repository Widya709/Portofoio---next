import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desaign poster dengan Canva", level: "Mahir" },
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
    kegiatan: "Mengerjakan tugas Sekolah",
  },
  {
    hari: "Jumat",
    waktu: "19.00 - 20.30",
    kegiatan: "Mengerjakan tugas Sekolah",
  },
  
]

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      nama="Widya Aulia"
      tagline="Siswa Kelas XI SMK Jurusan Rekayasa Perangkat Lunak, calon Junior Web Developer Kelas Industri UBIG."
      />

      {/* Tentang Saya */}
      <section className="mt-10 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-utama">
          Tentang Saya
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Halo! Saya Widya Aulia, Siswi Kelas XI RPL 1 di Jurusan REKAYASA PERANGKAT LUNAK (RPL) . Saya tertarik dengan dunia teknologi.
        </p>
      </section>

      {/* Hobi dan Cita-cita */ }
      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Hobi */ }
        <div className="rounded-xl bgwhite p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-utama">
            Hobi
          </h2>
          <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-600">
            <li>Menonton film</li>
            <li>Mendengarkan musik</li>
            <li>Menulis cerita</li>
          </ul>
        </div>

        {/* Cita-cita */ }
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-utama">
            Cita-cita
          </h2>
          <p className="mt-2 list-decimal pl-5 text-sm leading-relaxed text-slate-600" >
           Lawyer
           </p>
          <ol className="mt-2 list-decimal pl-5 -text-sm leading-relaxed text-slate-600">
            <li>Menjadi wanita udara</li>
            <li>Wara wiri ke berbagai negara</li>
            <li>Melesat ke berbagai Benua</li>
            <li>Dan Menembus Cakrawala</li>
          </ol>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      {/* Jadwal Kegiatan ubig */ }
      <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">Jadwal Kegiatan UBIG</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-600">
            <thead>
              <tr
              className="bg-sky-950 text-white">
                <th className="px-4 py-3">Hari</th>
                <th className="px-4 py-3">Waktu</th>
                <th className="px-4 py-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item, index) => (
                <tr key={`${item.hari}-${index}`}>
                  <td className="border px-4 py-3">{item.hari}</td>
                  <td className="border px-4 py-3">{item.waktu}</td>
                  <td className="border px-4 py-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        {/* Footer */ }
        <footer className="mt-4 bg-sky-950 px-4 py-5 text-center text-sm text-white">
          {new Date().getFullYear()} Widya Aulia | Dibuat dengan Next.js
          | Kelas Industri UBIG
        </footer>
      </section>
    </main> 
  )
}