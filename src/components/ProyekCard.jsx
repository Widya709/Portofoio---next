import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ambilGambarProyek } from "@/lib/gambar-proyek";

export default function ProyekCard({ proyek }) {
  const gambar = ambilGambarProyek(proyek);

  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block rounded-xl hover:shadow-md"
    >
      <Card className="h-full">
        {gambar && (
          <Image
            src={gambar}
            alt={`Tangkapan layar ${proyek.judul}`}
            width={640}
            height={420}
            loading="eager"
            unoptimized
            className="h-auto w-full"
          />
        )}

        <CardHeader>
          <Badge>{proyek.kategori}</Badge>

          <CardTitle className="text-lg text-primary">
            {proyek.judul}
          </CardTitle>

          <CardDescription>{proyek.deskripsi}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}