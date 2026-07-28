const FOOTER_LINKS = ["About The Mantle", "Programme", "Ministers", "Register"];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 py-10 md:px-[108px] md:py-14">
      <div className="mx-auto flex w-full max-w-[1224px] flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2.5 md:max-w-[400px] md:gap-4">
            <p className="font-display m-0 text-[28px] font-bold text-white md:text-[32px]">
              The Mantle
            </p>
            <p className="m-0 font-sans text-[13px] leading-[1.6] text-neutral-500 md:text-[14px]">
              A special experience within the 44th Annual Holy Ghost
              Convention.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 md:gap-3">
            <p className="m-0 font-sans text-[11px] font-semibold uppercase tracking-[1.5px] text-neutral-500 md:text-[12px]">
              Quick Links
            </p>
            {FOOTER_LINKS.map((label) => (
              <a
                key={label}
                href="#"
                className="font-sans text-[13px] text-neutral-300 hover:text-white md:text-[14px]"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 md:gap-3">
            <p className="m-0 font-sans text-[11px] font-semibold uppercase tracking-[1.5px] text-neutral-500 md:text-[12px]">
              Contact
            </p>
            <p className="m-0 whitespace-pre-line font-sans text-[13px] leading-[1.6] text-neutral-300 md:w-[280px] md:text-[14px]">
              {"Cornerstone City\nKM 24, Ibadan-Lagos Expressway\nIbadan, Nigeria"}
            </p>
            <a
              href="mailto:info@themantle.org"
              className="font-sans text-[13px] text-ember md:text-[14px]"
            >
              info@themantle.org
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-neutral-800" />

        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <p className="m-0 font-sans text-[12px] text-neutral-600 md:text-[13px]">
            © 2026 The Mantle. All rights reserved.
          </p>
          <p className="m-0 font-sans text-[12px] text-neutral-600 md:text-[13px]">
            Sword of the Spirit Ministries
          </p>
        </div>
      </div>
    </footer>
  );
}
