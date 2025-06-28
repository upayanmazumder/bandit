"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", initialTheme);
    }
  }, []);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!theme) return null;

  return (
    <div className="flex flex-row gap-2">
      {theme === "light" ? (
        <Image
          src="/theme-selector/light.svg"
          alt="Light Theme"
          width={52}
          height={52}
          className="cursor-pointer"
          onClick={toggleTheme}
        />
      ) : (
        <Image
          src="/theme-selector/dark.svg"
          alt="Dark Theme"
          width={52}
          height={52}
          className="cursor-pointer"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
}
