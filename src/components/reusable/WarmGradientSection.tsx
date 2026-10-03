import type { ReactNode } from "react";

// Full-bleed section whose background melts from the page grey into orange → red → plum.
// Children sit inside the standard container.
export function WarmGradientSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,#F5F5F5_35%,transparent_75%),radial-gradient(ellipse_60%_60%_at_0%_40%,#FF6A00_0%,transparent_70%),radial-gradient(ellipse_70%_60%_at_100%_70%,#C8102E_0%,transparent_70%),linear-gradient(180deg,#F5F5F5_0%,#F35A1F_45%,#C81D25_75%,#7A2350_100%)]"
      />
      <div className="container relative px-6 py-16 md:py-24">{children}</div>
    </section>
  );
}
