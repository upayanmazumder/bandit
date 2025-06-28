import NavLink from "../NavLink/NavLink";

export default function Nav() {
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
