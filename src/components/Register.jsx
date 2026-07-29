import { useState } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfBTdl2SkRJ0zaBFB_E1wFbb39xza7lMSGwzpxHHS50lm69Fw/formResponse";

const ATTENDANCE_OPTIONS = [
  "In Person – Cornerstone City",
  "Online / Streaming",
];

const inputClasses =
  "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-sans text-[15px] text-white placeholder-white/40 outline-none transition-colors focus:border-ember focus:ring-2 focus:ring-ember/40 md:text-[16px]";

const labelClasses = "font-sans text-[13px] font-medium text-white/80 md:text-[14px]";

export default function Register() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setError("");

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong sending your registration. Please check your connection and try again."
      );
    }
  }

  return (
    <div className="w-full text-left">
      {status === "success" && (
        <div
          role="status"
          className="mb-6 rounded-xl border border-ember/40 bg-white/10 px-5 py-4"
        >
          <p className="m-0 font-sans text-[15px] font-medium text-white md:text-[16px]">
            🎉 Registration received! We look forward to seeing you.
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-ember bg-ember/10 px-5 py-4"
        >
          <p className="m-0 font-sans text-[15px] text-white">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="register-name" className={labelClasses}>
            Full Name
          </label>
          <input
            id="register-name"
            name="entry.113930060"
            type="text"
            autoComplete="name"
            required
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="register-email" className={labelClasses}>
            Email
          </label>
          <input
            id="register-email"
            name="entry.895648118"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="register-phone" className={labelClasses}>
            Phone / WhatsApp
          </label>
          <input
            id="register-phone"
            name="entry.723214642"
            type="tel"
            autoComplete="tel"
            required
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="register-location" className={labelClasses}>
            Location
          </label>
          <input
            id="register-location"
            name="entry.205826489"
            type="text"
            autoComplete="address-level2"
            required
            className={inputClasses}
          />
        </div>

        <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
          <legend className={`${labelClasses} m-0 mb-1 p-0`}>Attending</legend>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            {ATTENDANCE_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 font-sans text-[14px] text-white transition-colors has-[:checked]:border-ember has-[:checked]:bg-ember/10 md:text-[15px]"
              >
                <input
                  type="radio"
                  name="entry.840841996"
                  value={option}
                  required
                  className="h-4 w-4 accent-ember"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[16px] font-semibold text-white shadow-[0px_1px_2px_0px_rgba(233,53,68,0.48),0px_0px_0px_1px_#e93544] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), linear-gradient(90deg, #e93544 0%, #e93544 100%)",
          }}
        >
          {status === "submitting" ? (
            <>
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
              Submitting…
            </>
          ) : (
            "Register Now"
          )}
        </button>
      </form>
    </div>
  );
}
