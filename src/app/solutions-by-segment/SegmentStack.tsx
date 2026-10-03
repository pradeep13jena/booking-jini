import { StickyStack } from "../home/StickyStack";
import { SegmentCard, type Segment } from "./SegmentCard";

// Segment cards that pin and stack while scrolling, same as the home RoleStack
export function SegmentStack({ segments }: { segments: Segment[] }) {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <StickyStack>
          {segments.map((segment, i) => (
            <SegmentCard key={i} segment={segment} />
          ))}
        </StickyStack>
      </div>
    </section>
  );
}
