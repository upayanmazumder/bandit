import Link from "next/link";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

export default function Footer() {
  return (
    <footer className="w-full max-w-screen overflow-x-hidden flex flex-row justify-between items-center px-0 bg-[var(--surface)] h-[100px] mx-auto">
      <Link
        href="/"
        className="flex flex-row justify-center items-center py-0 px-5 gap-2 font-['Montserrat_Alternates'] !text-[var(--default)] text-[36px]"
      >
        Bandit
      </Link>
      <ThemeSelector />
    </footer>
  );
}
