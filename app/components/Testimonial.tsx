import Image from "next/image";
import { imgQuoteIcon } from "./assets";

export default function Testimonial() {
  return (
    <section className="w-full flex justify-center px-6 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-6 lg:gap-7 max-w-[787px] text-center">
        <Image src={imgQuoteIcon} alt="" width={35} height={35} />
        <p
          className="text-[28px] lg:text-[44px] leading-[1.2] italic font-medium text-[var(--dark)]"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
        >
          &ldquo;My doctor at Northcoast was amazing lorem ipsum dolor quote goes here!&rdquo;
        </p>
        <p className="text-xs font-medium tracking-[1.12px] uppercase text-[var(--dark)]">
          Jane Smith
        </p>
      </div>
    </section>
  );
}
