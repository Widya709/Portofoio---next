import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";

export const metadata = {
    title: "Proyek",
    description: "Daftar proyek HTML, CSS, dan JavaScript karya Widya Aulia.",
};

export default function DaftarProyek () {
    return (
        <main className="mx-auto max-w-5xl px-4 py1-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">
                Proyek Saya
                </h1>


            <p className="mt-3 text-lg text-gray-700">
                Kumpulan hasil beajar saya di Kelas Industri UBIG. klik kartu untuk
                melihat detailnya.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {proyek.map((item, index) => (
                        <ProyekCard
                        key={item.slug || index}
                        proyek={item}
                        />
                    ))}
                </div>
        </main>
    );
}