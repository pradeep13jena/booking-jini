// Full-width dashed line with a dot where it meets each vertical frame rail
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative w-full ${className}`}>
      <div className="border-t border-dashed border-frame" />
      <div className="container relative">
        <span className="absolute top-0 left-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-frame bg-white" />
        <span className="absolute top-0 right-0 size-2.5 translate-x-1/2 -translate-y-1/2 rounded-full border border-frame bg-white" />
      </div>
    </div>
  );
}
