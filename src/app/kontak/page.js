
import FormKontak from "@/components/FormKontak";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Widya Aulia melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        Punya pertanyaan atau ingin bekerja sama? Hubungi saya dengan mengisi
        formulir di bawah.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Temukan Saya di
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2">
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
