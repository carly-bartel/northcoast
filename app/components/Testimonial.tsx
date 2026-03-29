import Image from "next/image";
import { imgLogoMark } from "./assets";

export default function Testimonial() {
  return (
    <section className="w-full max-w-[1320px] mx-auto flex justify-center px-6 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-6 lg:gap-7 max-w-[787px] text-center">
        <Image src={imgLogoMark} alt="Northcoast Dermatology" width={35} height={35} />
        <blockquote
          className="text-[28px] lg:text-[44px] leading-[1.2] italic font-medium text-[var(--dark)]"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
        >
          &ldquo;My doctor at Northcoast was amazing lorem ipsum dolor quote goes here!&rdquo;
        </blockquote>
        <cite className="text-xs font-medium tracking-[1.12px] uppercase text-[var(--dark)] not-italic">
          Jane Smith
        </cite>
      </div>
    </section>
  );
}
