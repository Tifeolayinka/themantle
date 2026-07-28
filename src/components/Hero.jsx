import { ASSETS } from "../data/assets";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBackground}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col gap-5 px-6 pt-[18vh] pb-12 md:justify-end md:gap-[110px] md:px-[108px] md:pt-0 md:pb-24">
        {/* Wordmark */}
        <div className="mx-auto flex w-full max-w-[1223px] flex-col gap-4 [container-type:inline-size] md:gap-0">
          <h1 className="font-display m-0 [font-size:clamp(40px,19.13cqw,234px)] leading-none tracking-tight text-white">
            The Mantle
          </h1>
          <p className="m-0 w-full font-sans [font-size:clamp(14px,calc(10px_+_1.1cqw),24px)] leading-[1.5] tracking-[-0.176px] text-white md:leading-[1.3333] md:tracking-[-0.36px]">
            You are invited to receive the mantle to take the world for
            christ
          </p>
        </div>

        {/* Event detail bar */}
        <div className="mx-auto flex w-full max-w-[1224px] flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="order-2 m-0 max-w-[293px] font-sans text-[16px] font-medium leading-[24px] tracking-[-0.176px] text-white md:order-1">
            CORNERSTONE CITY KM 24, IBADAN-LAGOS EXPRESSWAY IBADAN
          </p>

          <div className="order-1 flex flex-col-reverse items-start gap-6 md:order-2 md:flex-row md:items-center md:gap-4">
            <div className="flex flex-col items-start gap-[14px]">
              <span className="rounded-full border border-white px-3 py-1 font-sans text-[16px] font-medium leading-[24px] tracking-[-0.176px] text-white">
                Free entry
              </span>
              <p className="m-0 max-w-[270px] font-sans text-[24px] font-normal leading-[32px] tracking-[-0.36px] text-white md:max-w-none">
                31ST AUGUST - 3RD SEPTEMBER 2026
              </p>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 7.5V12l3 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="m-0 font-sans text-[16px] font-medium leading-[24px] tracking-[-0.176px] text-white">
                  8AM, 12NOON, 4PM DAILY
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-3 md:w-[211px]">
              <div className="aspect-[1280/720] w-full overflow-hidden rounded-lg">
                <img
                  src={ASSETS.videoThumbnail}
                  alt="Highlights from a previous Holy Ghost Convention session"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-neutral-400" />
                <span className="h-1 w-[33px] rounded-full bg-[#e93544]" />
                <span className="h-1 w-1 rounded-full bg-neutral-400" />
                <span className="h-1 w-1 rounded-full bg-neutral-400" />
              </div>
            </div>
          </div>

          <a
            href="#invitation"
            className="order-3 flex items-center justify-center gap-1 rounded-full border border-transparent p-2 font-sans text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-white shadow-[0px_1px_2px_0px_rgba(233,53,68,0.48),0px_0px_0px_1px_#e93544] transition-transform hover:scale-[1.03] md:hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), linear-gradient(90deg, #e93544 0%, #e93544 100%)",
            }}
          >
            Accept Invitation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 4.5L13 10L7.5 15.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
