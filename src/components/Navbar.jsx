import { useState } from "react";
import { ASSETS } from "../data/assets";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ministers", href: "#ministers" },
  { label: "Programme", href: "#programme" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-6 pt-6 md:px-[108px] md:pt-6">
      {/* Mobile bar */}
      <div className="flex items-center justify-between border-b border-white/40 pb-4 md:hidden">
        <img
          src={ASSETS.logo}
          alt="Holy Ghost Convention crest"
          className="h-[44px] w-auto object-contain"
        />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L15 15M15 1L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H18M0 6.5H18M0 12H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full mx-6 flex flex-col gap-1 rounded-b-2xl border border-t-0 border-white/10 bg-black/95 px-4 pb-5 pt-3 backdrop-blur md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 font-sans text-[16px] font-medium text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#invitation"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1 rounded-full border border-transparent px-4 py-3 font-sans text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-white shadow-[0px_1px_2px_0px_rgba(233,53,68,0.48),0px_0px_0px_1px_#e93544]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), linear-gradient(90deg, #e93544 0%, #e93544 100%)",
            }}
          >
            Accept Invitation
          </a>
        </div>
      )}

      {/* Desktop bar */}
      <div className="mx-auto hidden w-full max-w-[1224px] flex-wrap items-center justify-between gap-4 border-b border-white/40 pb-4 md:flex">
        <div className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-white">
          <p className="m-0">44TH ANNUAL</p>
          <p className="m-0">HOLYGHOST CONVENTION</p>
        </div>

        <img
          src={ASSETS.logo}
          alt="Holy Ghost Convention crest"
          className="h-[64px] w-auto object-contain md:h-[89px]"
        />

        <div className="flex items-center gap-3">
          <div className="hidden flex-col items-end gap-1 font-sans text-[14px] leading-[20px] tracking-[-0.084px] text-white sm:flex">
            <p className="m-0">Starting from 31ST AUGUST 2026</p>
            <p className="m-0 text-right">8AM, 12NOON, 4PM DAILY</p>
          </div>

          <a
            href="#invitation"
            className="flex shrink-0 items-center gap-1 rounded-full border border-transparent px-4 py-[10px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-white shadow-[0px_1px_2px_0px_rgba(233,53,68,0.48),0px_0px_0px_1px_#e93544] transition-transform hover:scale-[1.03]"
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
    </header>
  );
}
