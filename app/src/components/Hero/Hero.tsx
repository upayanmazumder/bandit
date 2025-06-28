import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="hero"
      className="absolute left-1/2 top-1/2 flex flex-row items-center p-0 w-[1154px] h-[512px] -translate-x-1/2 -translate-y-1/2"
    >
      {/* Hero Image */}
      <div
        className="flex-none order-0 flex-grow-0 bg-cover bg-center rounded-full w-[512px] h-[512px]"
        style={{
          backgroundImage: 'url("/images/hero.svg")',
        }}
      ></div>
      {/* Hero Right */}
      <div className="flex flex-col justify-between items-center p-0 gap-[83px] flex-none order-1 flex-grow-0 w-[642px] h-[230px]">
        <h1 className="m-auto w-[642px] h-[39px] flex items-center text-center font-[Montserrat_Alternates] font-medium text-[32px] leading-[39px] tracking-[0.1em]">
          Find your band. Find your sound.
        </h1>
        <button className="box-border flex flex-row items-center p-[15px] gap-[15px] m-auto w-[213px] h-[59px] bg-[#E35A34] border-white/30 border-[3px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-full">
          <span className="w-[144px] h-[29px] flex items-center justify-center font-[Montserrat] font-bold text-[24px] leading-[29px] text-[#FFFFE6] mix-blend-normal">
            Get Started
          </span>
          {/* SVG Icon placeholder */}
          <span className="flex flex-row justify-center items-center p-0 gap-[10px] w-[24px] h-[24px]">
            <FaArrowRight color="#FFFFE6" />
          </span>
        </button>
      </div>
    </div>
  );
}
