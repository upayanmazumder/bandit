import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-w-screen overflow-x-hidden flex flex-row justify-between items-center px-0 gap-[clamp(24px,8vw,354px)] bg-[#dbcabe] h-[100px] mx-auto">
      <Branding />
      <Nav />
      <Actions />
    </header>
  );
}

function Branding() {
  return (
    <div className="flex flex-row justify-center items-center p-0 gap-2">
      <div className="branding-icon-container">
        <Image
          src="/icon-transparent.svg"
          alt="Bandit Logo"
          fill
          className="rounded-full branding-icon-img"
          priority
        />
      </div>
    </div>
  );
}

function NavLink({
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
    <a
      href={href}
      className={`flex flex-row justify-center items-center px-[29px] py-[22px] gap-2 !text-[#e35a34] font-medium text-[20px] leading-6 tracking-[0.1em] text-center transition-colors duration-200 hover:text-[var(--orange)] focus:text-[var(--orange)] no-underline ${className}`}
    >
      <span
        className={`flex items-center justify-center text-center ${textClassName}`}
      >
        {children}
      </span>
    </a>
  );
}

function Nav() {
  return (
    <nav className="flex flex-row items-center py-[40px] w-[778px] h-[68px] mx-auto whitespace-nowrap">
      <NavLink
        href="/find-members"
        className="w-[228px]"
        textClassName="w-[170px]"
      >
        Find Members
      </NavLink>
      <NavLink href="/bands" className="w-[229px]" textClassName="w-[171px]">
        Explore bands
      </NavLink>
      <NavLink href="/gigs" className="w-[109px]" textClassName="w-[51px]">
        Gigs
      </NavLink>
      <NavLink
        href="/#how-it-works"
        className="w-[212px]"
        textClassName="w-[154px]"
      >
        How it works
      </NavLink>
    </nav>
  );
}

function Actions() {
  return (
    <div className="flex flex-row items-center p-0 m-auto w-[394px] h-[68px]">
      <div className="flex flex-row justify-center items-center px-5 py-[15px] gap-2 w-[262px] h-[50px] bg-[#efefef] rounded-full">
        <input
          type="text"
          placeholder="Search for something..."
          className="w-[222px] h-[20px] font-medium text-[16px] leading-5 flex items-center text-center tracking-[0.1em] text-[#606059] bg-transparent border-none outline-none"
        />
      </div>
      <NavLink href="/sign-in" className="ml-4 whitespace-nowrap">
        Sign In
      </NavLink>
    </div>
  );
}
