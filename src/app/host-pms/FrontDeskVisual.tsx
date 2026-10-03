// Hero visual: a front-desk screen with today's KPIs and the arrivals/departures flow

const KPIS = [
  { label: "Arrivals", value: "24", note: "9 checked in", accent: false },
  { label: "Departures", value: "17", note: "2 late checkout", accent: false },
  { label: "Rooms to clean", value: "11", note: "4 in progress", accent: true },
];

const FLOW = [
  { room: "204", name: "Nadia Farouk", detail: "Deluxe king · 3 nights", time: "Arriving 14:00", action: "Check in", style: "bg-primary text-white" },
  { room: "118", name: "Owen Brandt", detail: "Twin sea view · folio open", time: "Departing 11:30", action: "Settle bill", style: "border border-primary/40 text-primary" },
  { room: "301", name: "Suite turnover", detail: "Housekeeping · Mia's team", time: "Ready by 13:00", action: "On track", style: "bg-emerald-50 text-emerald-700" },
];

export function FrontDeskVisual() {
  return (
    <div aria-hidden className="relative overflow-hidden rounded-2xl bg-linear-to-b from-white via-[#FFF6EE] to-[#FFDDBE] py-6 pl-0 md:py-8">
      <div className="flex">
        {/* App sidebar, pushed past the panel's left edge so it reads as cropped */}
        <div className="-ml-10 w-[22%] shrink-0 space-y-3 pt-6 text-right text-[7px] text-[#1E0D01]/60">
          <p className="pr-2 font-semibold text-[#1E0D01]">Overview</p>
          <span className="block h-4 rounded-r-md bg-orange-100/70" />
          <p className="pr-2">Reservations</p>
          <p className="pr-2">Billing</p>
        </div>

        <div className="mr-6 flex-1 rounded-xl bg-white p-3 shadow-[0_12px_32px_rgba(30,13,1,0.08)] md:mr-8">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold text-[#1E0D01]">Front desk</p>
              <p className="text-[7px] text-[#1E0D01]/50">Thursday, 18 June</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[6px] text-emerald-700">● All channels in sync</span>
              <span className="rounded-md bg-primary px-2 py-1 text-[7px] font-semibold text-white">New booking</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {KPIS.map((k) => (
              <div
                key={k.label}
                className={`rounded-lg border p-2 ${k.accent ? "border-orange-200 bg-orange-50/70" : "border-black/5"}`}
              >
                <p className={`text-[6px] tracking-widest uppercase ${k.accent ? "text-primary" : "text-[#1E0D01]/50"}`}>
                  {k.label}
                </p>
                <p className={`text-base font-semibold ${k.accent ? "text-primary" : "text-[#1E0D01]"}`}>{k.value}</p>
                <p className={`text-[6px] ${k.accent ? "text-primary/80" : "text-[#1E0D01]/50"}`}>{k.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[6px] tracking-widest text-[#1E0D01]/50 uppercase">Today&apos;s flow</p>
          <ul className="mt-1.5 space-y-1.5">
            {FLOW.map((f) => (
              <li key={f.room} className="flex items-center gap-2 rounded-lg border border-black/5 px-2 py-1.5 text-[7px]">
                <span className="rounded bg-orange-50 px-1 py-0.5 font-semibold text-primary">{f.room}</span>
                <span className="flex-1">
                  <span className="block font-semibold text-[#1E0D01]">{f.name}</span>
                  <span className="text-[6px] text-[#1E0D01]/50">{f.detail}</span>
                </span>
                <span className="rounded bg-black/5 px-1.5 py-0.5 text-[6px] text-[#1E0D01]/60">{f.time}</span>
                <span className={`rounded px-1.5 py-0.5 text-[6px] font-semibold ${f.style}`}>{f.action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
