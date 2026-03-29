import Image from "next/image";
import { imgFooterCta } from "./assets";

const gradient = "linear-gradient(107.67deg, #e2edeb 23.13%, #f1f9ff 70.226%)";

export default function CTAHero() {
  return (
    <section className="w-full overflow-hidden" style={{ background: gradient }}>
      {/* ── Mobile layout ── */}
      <div className="lg:hidden flex flex-col">
        <div className="relative w-full h-[280px]">
          <Image
            src={imgFooterCta}
            alt="Dermatology care"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="px-6 py-8 flex flex-col gap-6">
          <div className="flex items-center gap-3 bg-white rounded-full px-3 py-2 self-start">
            <span style={{ display: "block", width: 8, height: 8, borderRadius: "50%", background: "var(--mid)", flexShrink: 0 }} />
            <span className="text-base text-[var(--dark)]">Accepting New Patients</span>
          </div>
          <div className="leading-none text-[var(--dark)]">
            <p
              className="text-[42px] font-normal"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Your skin health
            </p>
            <p
              className="text-[42px] italic"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
            >
              starts here
            </p>
          </div>
          <p className="text-lg leading-[1.4] text-[var(--dark)]">
            We are currently accepting new patients. Schedule your appointment today and
            take the first step toward expert dermatologic care.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-[var(--dark)] text-white text-base px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Visit
            </a>
            <a
              href="tel:2165244009"
              className="border border-[var(--dark)] text-[var(--dark)] text-base px-6 py-3 rounded-full hover:bg-[var(--dark)] hover:text-white transition-colors"
            >
              216.524.4009
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop layout — content constrained to 1320px ── */}
      <div className="hidden lg:block relative h-[674px]">
        {/* Photo — bleeds to right screen edge, ignores max-width */}
        <div className="absolute top-0 right-0 h-full" style={{ width: 957 }}>
          <div className="relative w-full h-full">
            <Image src={imgFooterCta} alt="Dermatology care" fill className="object-cover" />
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto relative h-full">
          {/* Pill */}
          <div className="absolute top-10 left-6 flex items-center gap-3 bg-white rounded-full px-3 py-2">
            <span style={{ display: "block", width: 8, height: 8, borderRadius: "50%", background: "var(--mid)", flexShrink: 0 }} />
            <span className="text-base text-[var(--dark)]">Accepting New Patients</span>
          </div>

          {/* Headline */}
          <div className="absolute left-6 top-[159px] leading-none text-[var(--dark)]">
            <p
              className="text-[72px] font-normal"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Your skin health
            </p>
            <p
              className="text-[72px] italic ml-[69px]"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
            >
              starts here
            </p>
          </div>

          {/* Body */}
          <p className="absolute left-6 top-[350px] text-lg leading-[1.4] text-[var(--dark)] max-w-[438px]">
            We are currently accepting new patients. Schedule your appointment today and
            take the first step toward expert dermatologic care.
          </p>

          {/* CTAs */}
          <div className="absolute left-6 top-[549px] flex gap-4">
            <a
              href="#"
              className="bg-[var(--dark)] text-white text-base px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Visit
            </a>
            <a
              href="tel:2165244009"
              className="border border-[var(--dark)] text-[var(--dark)] text-base px-6 py-3 rounded-full hover:bg-[var(--dark)] hover:text-white transition-colors"
            >
              216.524.4009
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
