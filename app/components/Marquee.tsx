import Image from "next/image";
import { imgMarqueeIcon } from "./assets";

const items = [
  "board-certified expertise",
  "advanced treatments",
  "patient-first approach",
  "all ages welcome",
];

function MarqueeItem({ label }: { label: string }) {
  return (
    <>
      <Image src={imgMarqueeIcon} alt="" width={24} height={24} className="shrink-0" />
      <span className="text-[var(--dark)] text-xs font-medium tracking-[1.12px] uppercase whitespace-nowrap">
        {label}
      </span>
    </>
  );
}

export default function Marquee() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[var(--lighter)] overflow-hidden py-4">
      <div className="flex items-center gap-8 animate-marquee w-max">
        {repeated.map((item, i) => (
          <MarqueeItem key={i} label={item} />
        ))}
      </div>
    </div>
  );
}
