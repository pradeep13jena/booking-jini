import Image, { type StaticImageData } from "next/image";

import { airbnb, bookingcom, expedia, google, idsnext, meta, slack, square, stripe, wiki } from "@/assets/image";

const COMPANIES: { name: string; logo: StaticImageData }[] = [
  { name: "IDS Next", logo: idsnext },
  { name: "Airbnb", logo: airbnb },
  { name: "Booking.com", logo: bookingcom },
  { name: "Google", logo: google },
  { name: "Expedia", logo: expedia },
  { name: "Meta", logo: meta },
  { name: "Slack", logo: slack },
  { name: "Square", logo: square },
  { name: "Stripe", logo: stripe },
  { name: "Wikipedia", logo: wiki },
];

export function CompanyMarque() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Same soft pink glow as the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_40%,rgba(255,196,196,0.3),transparent_70%)]"
      />

      <div className="container relative px-6 pt-6 pb-14">
        <p className="text-center text-lg font-medium text-[#1E0D01] md:text-xl">
          Works with the tools you already use
        </p>

        {/* Edges fade out so logos slide in/out softly */}
        <div className="group mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {/* Two identical copies; translating -50% loops seamlessly */}
          <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...COMPANIES, ...COMPANIES].map((company, i) => (
              <li
                key={`${company.name}-${i}`}
                // Padding (not flex gap) keeps both halves exactly equal width
                className="flex shrink-0 items-center pr-14 md:pr-20"
                aria-hidden={i >= COMPANIES.length}
              >
                <Image
                  src={company.logo}
                  alt={i >= COMPANIES.length ? "" : company.name}
                  className="h-10 w-auto object-contain md:h-14"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
