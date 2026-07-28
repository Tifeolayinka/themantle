import { ASSETS } from "../data/assets";
import { MINISTERS } from "../data/ministers";
import MinisterCard from "./MinisterCard";

export default function Ministers() {
  return (
    <section id="ministers" className="relative overflow-hidden px-6 py-24 md:px-[108px] md:py-32">
      <div className="absolute inset-0">
        <img src={ASSETS.heroBackground} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1224px] flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-2 text-center text-white">
          <h2 className="font-display m-0 text-[40px] font-bold uppercase leading-[1.1] tracking-tight sm:text-[48px] md:text-[56px] md:leading-[64px]">
            Meet the Ministers
          </h2>
          <p className="m-0 max-w-[423px] font-sans text-[18px] leading-[24px] tracking-[-0.27px]">
            Anointed voices. One mandate. Equipping a generation to take the
            world for Christ.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
          {MINISTERS.map((minister) => (
            <MinisterCard key={minister.id} name={minister.name} photo={minister.photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
