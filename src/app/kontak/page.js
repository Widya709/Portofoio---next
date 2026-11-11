
import FormKontak from "@/components/FormKontak";

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
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        <section className="min-h-72 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-primary">
            Temukan Saya di
          </h2>
          <ul className="space-y-1.5 text-sm">
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
        </section>
      </div>
    </main>
  );
}
