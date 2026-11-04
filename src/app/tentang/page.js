import Kartu from "@/components/Kartu";

export const metadata = {
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Widya aulia.",
};

export default function Tentang() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
                Tentang Saya
            </h1>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Kartu judul="Perkenalan">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        Halo! Saya Widya Aulia, siswi kelas XI RPL 1 di jurusan
                        Rekayasa Perangkat Lunak (RPL). Saya tertarik dengan
                        dunia teknologi.
                    </p>
                </Kartu>

                <Kartu judul="Hobi">
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        <li>Menonton film</li>
                        <li>Mendengarkan musik</li>
                        <li>Menulis cerita</li>
                    </ul>
                </Kartu>

                <Kartu judul="Cita-cita">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        Lawyer
                    </p>
                    <ol className="mt-2 list-decimal pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        <li>Menjadi wanita udara</li>
                        <li>Wara-wiri ke berbagai negara</li>
                        <li>Melesat ke berbagai benua</li>
                        <li>Dan menembus cakrawala</li>
                    </ol>
                </Kartu>

                <Kartu judul="Jadwal Belajar UBIG">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[440px] border-collapse text-left text-sm text-slate-600 dark:text-slate-300">
                            <thead>
                                <tr className="bg-sky-950 text-white">
                                    <th className="px-3 py-3">Hari</th>
                                    <th className="px-3 py-3">Waktu</th>
                                    <th className="px-3 py-3">Kegiatan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-3 dark:border-slate-700">Senin</td>
                                    <td className="whitespace-nowrap border px-3 py-3 dark:border-slate-700">19.00 - 20.30</td>
                                    <td className="border px-3 py-3 dark:border-slate-700">Mempelajari materi UBIG</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-3 dark:border-slate-700">Selasa</td>
                                    <td className="whitespace-nowrap border px-3 py-3 dark:border-slate-700">19.00 - 20.15</td>
                                    <td className="border px-3 py-3 dark:border-slate-700">Mengerjakan tugas UBIG</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-3 dark:border-slate-700">Rabu</td>
                                    <td className="whitespace-nowrap border px-3 py-3 dark:border-slate-700">18.00 - 21.15</td>
                                    <td className="border px-3 py-3 dark:border-slate-700">Mengerjakan tugas UBIG</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-3 dark:border-slate-700">Kamis</td>
                                    <td className="whitespace-nowrap border px-3 py-3 dark:border-slate-700">19.00 - 20.30</td>
                                    <td className="border px-3 py-3 dark:border-slate-700">Mengerjakan tugas Sekolah</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-3 dark:border-slate-700">Jumat</td>
                                    <td className="whitespace-nowrap border px-3 py-3 dark:border-slate-700">19.00 - 20.30</td>
                                    <td className="border px-3 py-3 dark:border-slate-700">Mengerjakan tugas Sekolah</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Kartu>
            </div>
        </main>
    );
}