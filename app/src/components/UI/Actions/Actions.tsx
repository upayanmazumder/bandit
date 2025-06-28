import NavLink from "../NavLink/NavLink";

export default function Actions() {
  return (
    <div className="flex flex-row items-center p-0 m-auto w-[394px] h-[68px]">
      <div className="flex flex-row justify-center items-center px-5 py-[15px] gap-2 w-[262px] h-[50px] bg-[#efefef] rounded-full">
        <input
          type="text"
          placeholder="Search for something..."
          className="w-[222px] h-[20px] font-medium text-[16px] leading-5 flex items-center text-center tracking-[0.1em] text-[#4b4b4b] bg-transparent border-none outline-none"
        />
      </div>
      <NavLink href="/sign-in" className="ml-4 whitespace-nowrap">
        Sign In
      </NavLink>
    </div>
  );
}
