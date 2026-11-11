"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProyekCard from "@/components/ProyekCard";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.js"];

export default function FilterProyek({ proyek }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  const kataKecil = kata.toLowerCase();

  const hasil = proyek.filter((p) => {
    const cocokKategori =
      kategori === "Semua" || p.kategori === kategori;

    const cocokKata = (p.judul || "")
      .toLowerCase()
      .includes(kataKecil);

    const cocokDeskripsi = (p.deskripsi || "")
      .toLowerCase()
      .includes(kataKecil);

    return cocokKategori && (cocokKata || cocokDeskripsi);
  });

  return (
    <div className="mt-4 space-y-6">
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <Button
            key={k}
            variant={kategori === k ? "default" : "outline"}
            onClick={() => setKategori(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      <div>
        <label htmlFor="cari" className="block font-semibold">
          Cari proyek
        </label>

        <input
          type="text"
          id="cari"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Contoh: kalkulator"
          className="mt-1 w-full rounded-lg border border-input bg-background p-2 text-foreground md:w-80"
        />

        {kata !== "" && (
          <Button
            variant="link"
            onClick={() => setKata("")}
            className="mt-2 px-0 text-aksen"
          >
            Hapus pencarian
          </Button>
        )}
      </div>

      <p className="text-sm text-muted-foreground">
        Menampilkan {hasil.length} dari {proyek.length} proyek
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {hasil.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>

      {hasil.length === 0 && (
        <p className="rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
          Belum ada proyek yang cocok.
        </p>
      )}
    </div>
  );
}