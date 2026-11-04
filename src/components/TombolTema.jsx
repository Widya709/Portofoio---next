"use client";

import { useEffect } from "react";

export default function TombolTema() {
    useEffect(() => {
        const temaGelap = localStorage.getItem("tema") === "gelap";
        document.documentElement.classList.toggle("dark", temaGelap);
    }, []);

    function gantiTema() {
        const temaGelap = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", temaGelap);
        localStorage.setItem("tema", temaGelap ? "gelap" : "terang");
    }

    return (
        <button
        type="button"
        onClick={gantiTema}
        aria-label="Ubah tema terang atau gelap"
        className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            <span className="dark:hidden">Mode Gelap</span>
            <span className="hidden dark:inline">Mode Terang</span>
        </button>

    );
}