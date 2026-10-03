import Image from "next/image";
import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuSmile } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { DUMMY } from "./dummy-images";

type Socials = { x?: string; linkedin?: string; instagram?: string };

const SOCIAL_ICONS: { key: keyof Socials; label: string; icon: IconType }[] = [
  { key: "x", label: "X", icon: FaXTwitter },
  { key: "linkedin", label: "LinkedIn", icon: FaLinkedinIn },
  { key: "instagram", label: "Instagram", icon: FaInstagram },
];

// TODO: replace "#" with real profile URLs; drop a key to hide that icon for a member
const PLACEHOLDER_SOCIALS: Socials = { x: "#", linkedin: "#", instagram: "#" };

const TEAM: { name: string; role: string; socials: Socials }[] = [
  { name: "Sibasish Mishra", role: "Founder & CEO, Bookingjini", socials: PLACEHOLDER_SOCIALS },
  { name: "Gourab Nandy", role: "Sales Vice President", socials: PLACEHOLDER_SOCIALS },
  { name: "Namrata Swain", role: "AVP - Operations", socials: PLACEHOLDER_SOCIALS },
  { name: "Anshul Chauhan", role: "Evangelist", socials: PLACEHOLDER_SOCIALS },
  { name: "Ramanujam Gond", role: "Frontend Lead", socials: PLACEHOLDER_SOCIALS },
  { name: "Minhajuddin Khan", role: "Mobile Development Lead", socials: PLACEHOLDER_SOCIALS },
  { name: "Manoranjan Rout", role: "Tech Lead", socials: PLACEHOLDER_SOCIALS },
  { name: "Anurag Mishra", role: "Senior Account Manager", socials: PLACEHOLDER_SOCIALS },
];

export function CoreTeam() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Core Team"
          icon={<LuSmile className="h-3.5 w-3.5 text-primary" />}
          title="The team behind the tools"
          description="We're a small, focused crew of builders, designers, and thinkers on a mission to make launching high-converting sites easier for modern creators."
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal as="li" key={member.name} index={i % 4} className="group relative aspect-5/6 overflow-hidden rounded-md">
              <Image
                src={DUMMY.team[i]}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 280px, 50vw"
                className="object-cover grayscale-25 transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark fade so the caption stays readable on any photo */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1a1d2b]/90 via-[#1a1d2b]/30 to-transparent" />

              {/* Hover / keyboard-focus overlay: darkens the photo and reveals social links */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none bg-[#1E1A16]/75 opacity-0 transition-opacity duration-300 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 md:gap-3">
                {SOCIAL_ICONS.filter(({ key }) => member.socials[key]).map(({ key, label, icon: Icon }, s) => (
                  <a
                    key={key}
                    href={member.socials[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${label}`}
                    style={{ transitionDelay: `${s * 60}ms` }}
                    className="flex size-10 translate-y-3 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white opacity-0 transition-all duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 hover:border-white/40 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-primary md:size-14"
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 md:p-4">
                <p className="text-sm font-semibold text-white md:text-base">{member.name}</p>
                <p className="mt-1 text-xs text-white/80 md:text-sm">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
