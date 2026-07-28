import { ASSETS } from "../data/assets";

export default function CTA() {
  return (
    <section id="invitation" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={ASSETS.heroBackground} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-6 py-24 text-center md:min-h-[556px] md:justify-center md:gap-8 md:px-[108px] md:py-0">
        <p className="m-0 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-ember md:text-[14px]">
          Accept the Invitation
        </p>

        <h2 className="font-display m-0 max-w-[440px] text-[44px] leading-[1.1] tracking-[-0.44px] text-white sm:max-w-none sm:text-[56px] md:text-[72px] md:tracking-[-0.72px]">
          Will You Answer the Call?
        </h2>

        <p className="m-0 max-w-[520px] font-sans text-[15px] leading-[1.4] tracking-[-0.2px] text-neutral-400 md:text-[20px] md:tracking-[-0.3px]">
          Join thousands of believers at Cornerstone City, Ibadan this August.
        </p>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-0 md:gap-4">
          <a
            href="#programme"
            className="flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[16px] font-semibold text-white shadow-[0px_1px_2px_0px_rgba(233,53,68,0.48),0px_0px_0px_1px_#e93544] transition-transform hover:scale-[1.03]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), linear-gradient(90deg, #e93544 0%, #e93544 100%)",
            }}
          >
            Register Now
          </a>

          <a
            href="#about"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-sans text-[16px] font-medium text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
