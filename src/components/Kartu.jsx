export default function Kartu({judul,children}) {
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-3 text-2xl font-bold text-utama dark:text-sky-200">
                {judul}
            </h2>

            {children}
        </section>
    );
}