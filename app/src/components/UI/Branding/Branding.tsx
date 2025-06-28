import Link from "next/link";
import Image from "next/image";

export default function Branding() {
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
