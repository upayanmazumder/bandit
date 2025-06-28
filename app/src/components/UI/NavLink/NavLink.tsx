import Link from "next/link";

export default function NavLink({
  href,
  children,
  className = "",
  textClassName = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-row justify-center items-center px-[29px] py-[22px] gap-2 !text-[var(--red)] font-medium text-[20px] leading-6 tracking-[0.1em] text-center transition-colors duration-200 hover:text-[var(--orange)] focus:text-[var(--orange)] no-underline ${className}`}
    >
      <span
        className={`flex items-center justify-center text-center ${textClassName}`}
      >
        {children}
      </span>
    </Link>
  );
}
