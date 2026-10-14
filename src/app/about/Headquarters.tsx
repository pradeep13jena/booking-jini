import { Reveal } from "@/components/reusable/Reveal";

const COUNTRIES = ["India", "Bangladesh", "Sri Lanka", "Nepal", "United Kingdom", "Thailand", "Australia"];

const eyebrow = "text-[11px] font-medium tracking-[0.2em] uppercase";

export function Headquarters() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-[1.6fr_1fr] md:items-end">
          <div>
            <p className={`flex items-center gap-3 text-primary ${eyebrow}`}>
              <span aria-hidden className="h-px w-8 bg-primary" />
              Headquarters
            </p>
            <h2 className="mt-3 font-heading text-6xl leading-[0.95] font-bold tracking-tight text-[#1E0D01] md:text-8xl lg:text-9xl">
              Bhubaneswar,
              <br />
              Odisha<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="text-sm md:pb-4">
            {/* TODO: add the full office address */}
            <p className="font-medium text-[#1E0D01]">[Full office address]</p>
            <p className="mt-1 text-[#1E0D01]/60">Built in Odisha, serving hotels in 120+ Indian cities.</p>
          </div>
        </Reveal>

        <Reveal index={1} className="relative mt-8 overflow-hidden rounded-3xl bg-[#E8600F] p-6 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,190,140,0.65),transparent_50%)]"
          />
          <div className="relative">
            <p className={`text-[#1E0D01]/80 ${eyebrow}`}>Hotels on Bookingjini in</p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 font-heading text-4xl leading-tight font-semibold text-[#1E0D01] md:text-6xl">
              {COUNTRIES.map((country, i) => (
                <li
                  key={country}
                  className={`flex cursor-default items-center gap-2 transition-colors duration-200 hover:text-white ${i === 0 ? "text-white" : ""}`}
                >
                  {country}
                  {i === 0 && (
                    <span className="rounded-full bg-white px-2 py-0.5 font-sans text-[10px] font-semibold tracking-wider text-[#E8600F]">
                      HQ
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-5 border-t border-[#1E0D01]/20 pt-6">
              <span className="relative flex size-16 shrink-0 items-center justify-center rounded-full bg-[#1E0D01] font-heading text-2xl font-semibold text-white">
                {/* Slow-turning dashed ring */}
                <span
                  aria-hidden
                  className="absolute -inset-1.5 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-[#1E0D01]/60 motion-reduce:animate-none"
                />
                80
              </span>
              <p className="max-w-xs text-sm font-medium text-[#1E0D01]">
                Team of 80 people across sales, support, product and engineering.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
