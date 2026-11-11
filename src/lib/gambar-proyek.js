const gambarLokalProyek = {
  "halaman-profil": "/proyek/halaman utama.png",
  "form-kontak": "/proyek/kontak.png",
  "tabel-jadwal": "/proyek/jadwal.png",
  "portofolio-responsif": "/proyek/responsif.jpg",
};

export function ambilGambarProyek(proyek) {
  const gambarDatabase = proyek.gambar_url?.trim();

  if (gambarDatabase && !gambarDatabase.startsWith("/")) {
    return gambarDatabase;
  }

  return gambarLokalProyek[proyek.slug] ?? gambarDatabase ?? null;
}
