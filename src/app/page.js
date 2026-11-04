
import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { proyek } from "@/data/proyek";


export const metadata = {
  title: "Beranda",
  description: "Portofolio Widya Aulia, siswi Rekayasa Perangkat Lunak dan calon Junior Web Developer.",
};

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="w-full min-w-0">
        <Hero
          nama="Widya Aulia"
          tagline="Siswa Kelas XI SMK Jurusan Rekayasa Perangkat Lunak, calon Junior Web Developer Kelas Industri UBIG."
        />
      </div>

      <section className="mt-8 w-full min-w-0 sm:mt-10">
        <h2 className="mb-4 break-words text-xl font-bold text-utama dark:text-sky-200 sm:text-2xl">
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

      <section className="mt-8 w-full min-w-0 sm:mt-10">
        <h2 className="mb-4 break-words text-xl font-bold text-utama dark:text-sky-200 sm:text-2xl">
          Proyek Terbaru
        </h2>
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white hover:opacity-90"
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}
