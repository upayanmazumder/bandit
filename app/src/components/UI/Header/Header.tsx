import Branding from "../Branding/Branding";
import Nav from "../Nav/Nav";
import Actions from "../Actions/Actions";

export default function Header() {
  return (
    <header className="w-full max-w-screen overflow-x-hidden flex flex-row justify-between items-center px-5 bg-[var(--surface)] h-[100px] mx-auto">
      <Branding />
      <Nav />
      <Actions />
    </header>
  );
}
