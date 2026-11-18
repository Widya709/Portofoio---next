
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  useEffect(() => {
    const tema = localStorage.getItem("tema");
    if (tema === "gelap") {
      document.documentElement.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGelap(true);
    }
  }, []);

  const gantiTema = () => {
    document.documentElement.classList.toggle("dark");

    const temaBaru = !gelap;
    setGelap(temaBaru);
    localStorage.setItem("tema", temaBaru ? "gelap" : "terang");
  };

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
