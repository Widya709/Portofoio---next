import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ambilGambarProyek } from "@/lib/gambar-proyek";

async function ambilProyek(slug) {
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error?.code === "PGRST116") {
        return null;
    }

    if (error) {
        throw new Error(`Gagal memuat proyek: ${error.message}`, { cause: error });
    }

    return data;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = await ambilProyek(slug);

    if (!item) {
        return {
            title: "Proyek tidak ditemukan",
        };
    }

    return {
        title: item.judul,
        description: item.deskripsi,
    };
}

export default async function DetaiProyek({ params }) {
    const { slug } = await params;
    const item = await ambilProyek(slug);

    if (!item) {
        notFound();
    }

    const gambar = ambilGambarProyek(item);

    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            <nav aria-label="Breadcrumb" className="text-sm">
                <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
                    <li><Link href="/" className="hover:text-aksen hover:underline">Beranda</Link></li>
                    <li aria-hidden="true">/</li>
                    <li><Link href="/proyek" className="hover:text-aksen hover:underline">Proyek</Link></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="font-semibold text-primary">{item.judul}</li>
                </ol>
            </nav>

            <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
                {item.judul}
            </h1>

            <p className="mt-2 text-muted-foreground">
                {item.kategori}
                {item.minggu && <> &middot; Dibuat di {item.minggu}</>}
            </p>

            {gambar ? (
                <Image
                src={gambar}
                alt={`Tangkapan layar ${item.judul}`}
                width={640}
                height={420}
                loading="eager"
                style={{ width: "100%", height: "auto" }}
                className="mt-6 h-auto w-full rounded-xl border border-border"
                unoptimized
                />
            ) : null}

            <p className="mt-6 text-lg">{item.deskripsi}</p>

            {Array.isArray(item.fitur) && item.fitur.length > 0 && (
                <>
                    <h2 className="mt-8 text-2xl font-bold text-primary">
                        Yang Saya Pelajari
                    </h2>

                    <ul className="mt-3 list-disc pl-5">
                        {item.fitur.map((f) => (
                            <li key={f}>{f}</li>
                        ))}
                    </ul>
                </>
            )}
        </main>
    );
}