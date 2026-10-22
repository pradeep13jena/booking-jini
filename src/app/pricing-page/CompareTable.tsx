"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuChevronDown, LuPlus, LuZap } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { cn } from "@/lib/utils";
import { AddonPill, CheckDot, DashDot } from "./Marks";
import { COMPARE_COLUMNS, COMPARE_GROUPS, COMPARE_VISIBLE_GROUPS, type CompareGroup, type CompareValue } from "./data";

// Feature column + one column per plan; the table scrolls sideways on small screens
const GRID = "grid grid-cols-[minmax(200px,1.6fr)_repeat(4,minmax(112px,1fr))] gap-x-2";
const POPULAR = COMPARE_COLUMNS.findIndex((column) => column.popular);
const HIGHLIGHT = "bg-[#FFF1E6]";

function Value({ value }: { value: CompareValue }) {
  if (value === true)
    return (
      <>
        <CheckDot />
        <span className="sr-only">Included</span>
      </>
    );
  if (value === false)
    return (
      <>
        <DashDot />
        <span className="sr-only">Not included</span>
      </>
    );
  if (value === "addon") return <AddonPill />;
  return <span className="text-sm font-medium text-[#1E0D01] md:text-base">{value}</span>;
}

function Legend() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#1E0D01]/70 md:text-sm">
      <li className="flex items-center gap-2">
        <CheckDot className="size-5" />
        Included
      </li>
      <li className="flex items-center gap-2">
        <span className="flex size-5 items-center justify-center rounded-full border border-dashed border-primary/60 text-primary">
          <LuPlus aria-hidden className="h-3 w-3" />
        </span>
        Available as add-on
      </li>
      <li className="flex items-center gap-2">
        <DashDot className="size-5" />
        Not included
      </li>
    </ul>
  );
}

function Group({
  group,
  index,
  open,
  onToggle,
}: {
  group: CompareGroup;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = group.icon;
  const panelId = `compare-group-${index}`;

  return (
    <div role="rowgroup" className="mt-2">
      <div role="row">
        <div role="rowheader" aria-colspan={COMPARE_COLUMNS.length + 1}>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={onToggle}
            className="flex w-full items-center gap-3 rounded-2xl bg-[#F7F3EF] px-4 py-3 text-left transition-colors duration-300 hover:bg-[#F2EAE2]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1E0D01] text-sm font-semibold text-white">
              {Icon ? <Icon aria-hidden className="h-4 w-4" /> : String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-xl font-medium text-[#1E0D01] md:text-2xl">{group.name}</span>
            <span className="text-sm text-[#1E0D01]/50">{group.rows.length} features</span>
            <span className="ml-auto flex size-9 items-center justify-center rounded-full bg-white">
              <LuChevronDown
                aria-hidden
                className={cn("h-4 w-4 text-[#1E0D01] transition-transform duration-300", open && "rotate-180")}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {group.rows.map((row) => (
              <div key={row.feature} role="row" className={GRID}>
                <div role="rowheader" className="border-b border-black/5 px-4 py-4 text-sm text-[#1E0D01] md:text-base">
                  {row.feature}
                </div>
                {row.values.map((value, col) => (
                  <div
                    key={COMPARE_COLUMNS[col].name}
                    role="cell"
                    className={cn(
                      "flex items-center justify-center border-b border-black/5 px-2 py-4 text-center",
                      col === POPULAR && HIGHLIGHT
                    )}
                  >
                    <Value value={value} />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CompareTable() {
  const reduceMotion = useReducedMotion();
  const tableRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  // Every group starts expanded; each header toggles its own rows
  const [closed, setClosed] = useState<Set<number>>(new Set());

  const visibleGroups = showAll ? COMPARE_GROUPS : COMPARE_GROUPS.slice(0, COMPARE_VISIBLE_GROUPS);
  const hasMore = COMPARE_GROUPS.length > COMPARE_VISIBLE_GROUPS;

  const toggleGroup = (index: number) =>
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  const toggleShowAll = () => {
    // Collapsing a long table can leave the reader far below it — bring its top back into view
    const top = tableRef.current?.getBoundingClientRect().top ?? 0;
    if (showAll && top < 0) tableRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setShowAll(!showAll);
  };

  return (
    <section id="compare" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Compare plans"
          icon={<LuZap className="h-3.5 w-3.5 text-primary" />}
          title="Compare every feature"
        />

        <Reveal className="mt-6">
          <Legend />
        </Reveal>

        <Reveal className="mt-8">
          <div ref={tableRef} className="scroll-mt-28 overflow-x-auto rounded-4xl bg-white p-2 shadow-[0_4px_24px_rgba(30,13,1,0.05)]">
            <div role="table" aria-label="Compare plan features" className="min-w-190">
              <div role="row" className={GRID}>
                <div role="columnheader" className="flex items-end px-4 pb-4 text-sm text-[#1E0D01]/50">
                  Features
                </div>
                {COMPARE_COLUMNS.map((column, col) => (
                  <div
                    key={column.name}
                    role="columnheader"
                    className={cn(
                      "flex flex-col items-center justify-end px-2 pt-6 pb-4 text-center",
                      col === POPULAR && cn(HIGHLIGHT, "rounded-t-2xl border-t-2 border-primary")
                    )}
                  >
                    <span className="font-heading text-lg font-medium text-[#1E0D01] md:text-xl">{column.name}</span>
                    {column.popular ? (
                      <span className="mt-1 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-white">
                        {column.caption}
                      </span>
                    ) : (
                      <span className="mt-1 text-xs text-[#1E0D01]/50">{column.caption}</span>
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {visibleGroups.map((group, i) => (
                  <motion.div
                    key={group.name}
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <Group group={group} index={i} open={!closed.has(i)} onToggle={() => toggleGroup(i)} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              aria-expanded={showAll}
              onClick={toggleShowAll}
              className="group inline-flex items-center gap-3 rounded-full bg-[#1E0D01] py-2.5 pr-2.5 pl-6 text-base font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_28px_rgba(30,13,1,0.25)] active:scale-[0.98]"
            >
              {showAll ? "Show fewer features" : "Show all features"}
              <span className="flex size-7 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
                <LuChevronDown
                  aria-hidden
                  className={cn("h-4 w-4 transition-transform duration-300", showAll && "rotate-180")}
                />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
