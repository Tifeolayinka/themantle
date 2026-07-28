import { SCHEDULE } from "../data/schedule";

export default function Schedule() {
  return (
    <section id="programme" className="bg-neutral-100 px-6 py-16 md:px-[108px] md:py-[92px]">
      <div className="mx-auto flex w-full max-w-[1224px] flex-col gap-8 md:gap-14">
        <div className="flex flex-col gap-2.5 md:gap-4">
          <p className="m-0 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-ember md:text-[14px]">
            Programme
          </p>
          <h2 className="font-display m-0 text-[36px] font-bold leading-[1.1] tracking-[-0.36px] text-ink md:text-[56px] md:tracking-[-0.56px]">
            Four Days of Encounter
          </h2>
          <p className="m-0 font-sans text-[14px] tracking-[-0.21px] text-mute md:text-[18px] md:tracking-[-0.27px]">
            31st August — 3rd September 2026
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
          {SCHEDULE.map((day) => (
            <div key={day.day} className="flex flex-col rounded-xl bg-white">
              <div className="flex flex-col gap-0.5 rounded-t-xl bg-ink px-5 py-4 md:gap-1 md:px-7 md:py-6">
                <p className="m-0 font-sans text-[12px] font-semibold uppercase tracking-[1.5px] text-ember md:text-[13px]">
                  {day.day}
                </p>
                <p className="m-0 font-sans text-[14px] font-semibold tracking-[-0.14px] text-white md:text-[18px] md:tracking-[-0.18px]">
                  {day.date}
                </p>
              </div>

              <div className="flex flex-col px-5 py-2 md:px-7 md:py-5">
                {day.sessions.map((session, i) => (
                  <div
                    key={session.time}
                    className={`flex items-center gap-3 py-3 md:gap-4 md:py-4 ${
                      i > 0 ? "border-t border-neutral-200" : ""
                    }`}
                  >
                    <span className="w-[64px] shrink-0 font-sans text-[12px] font-medium text-neutral-400 md:text-[13px]">
                      {session.time}
                    </span>
                    <span className="font-sans text-[13px] font-medium text-ink md:text-[15px]">
                      {session.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
