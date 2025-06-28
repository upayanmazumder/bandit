import Image from "next/image";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";

export default function Footer() {
  return (
    <footer className="w-full max-w-screen overflow-x-hidden flex flex-row justify-between items-center px-0 bg-[var(--surface)] h-[100px] mx-auto">
      <Branding />
      <ThemeSelector />
    </footer>
  );
}

function Branding() {
  return (
    <Link
      href="/"
      className="flex flex-row justify-center items-center p-0 gap-2"
    >
      <div className="branding-icon-container">
        <Image
          src="/icon-transparent.svg"
          alt="Bandit Logo"
          fill
          className="rounded-full branding-icon-img"
          priority
        />
      </div>
    </Link>
  );
}
