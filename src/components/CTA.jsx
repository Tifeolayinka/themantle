import { ASSETS } from "../data/assets";
import Register from "./Register";

export default function CTA() {
  return (
    <section id="invitation" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={ASSETS.heroBackground} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col items-center gap-5 px-6 py-24 text-center md:gap-8 md:px-[108px] md:py-28">
        <p className="m-0 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-ember md:text-[14px]">
          Accept the Invitation
        </p>

        <h2 className="font-display m-0 max-w-[440px] text-[44px] leading-[1.1] tracking-[-0.44px] text-white sm:max-w-none sm:text-[56px] md:text-[72px] md:tracking-[-0.72px]">
          Will You Answer the Call?
        </h2>

        <p className="m-0 max-w-[520px] font-sans text-[15px] leading-[1.4] tracking-[-0.2px] text-neutral-400 md:text-[20px] md:tracking-[-0.3px]">
          Join thousands of believers at Cornerstone City, Ibadan this August.
        </p>

        <a
          href="#about"
          className="mt-1 font-sans text-[14px] font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white"
        >
          Learn more about The Mantle
        </a>

        <div className="mt-4 w-full md:mt-6">
          <Register />
        </div>
      </div>
    </section>
  );
}
