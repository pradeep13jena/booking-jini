import { Reveal } from "../home/Reveal";

// TEMP: styled text stand-ins — replace with logo images (next/image) once the assets are added
const COMPANIES = [
  { name: "ICICI Bank", className: "italic text-[#0B5A7A]" },
  { name: "ORACLE", className: "tracking-wider text-[#E2231A]" },
  { name: "OYO", className: "text-[#EE2E24]" },
];

export function LeadershipExperience() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight text-[#1E0D01] md:text-5xl">
            Experience behind the platform
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">
            Bookingjini&apos;s leadership brings experience across hospitality, technology and business.
          </p>
        </Reveal>

        <Reveal index={1} className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
            {COMPANIES.map((company) => (
              <li key={company.name} className={`text-2xl font-extrabold md:text-3xl ${company.className}`}>
                {company.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
