import Image from "next/image";
import { imgHeroPhoto, imgMobileHero } from "./assets";

const gradient = "linear-gradient(107.67deg, #e2edeb 23.13%, #f1f9ff 70.226%)";

const Pill = () => (
  <div className="flex items-center gap-3 bg-white rounded-full px-3 py-2 self-start">
    <span style={{ display: "block", width: 8, height: 8, borderRadius: "50%", background: "var(--mid)", flexShrink: 0 }} />
    <span className="text-base text-[var(--dark)]">Accepting New Patients</span>
  </div>
);

const Headline = ({ line1, line2 }: { line1: string; line2: string }) => (
  <div className="leading-none text-[var(--dark)]">
    <p
      className="text-[42px] lg:text-[72px] font-normal"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {line1}
    </p>
    <p
      className="text-[42px] lg:text-[72px] italic lg:ml-[69px]"
      style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
    >
      {line2}
    </p>
  </div>
);

const CTAs = () => (
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
);

export default function Hero() {
  return (
    <section className="w-full overflow-hidden" style={{ background: gradient }}>
      {/* ── Mobile layout ── */}
      <div className="lg:hidden flex flex-col">
        <div className="relative w-full h-[280px]">
          <Image
            src={imgMobileHero}
            alt="Dermatology patient"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="px-6 py-8 flex flex-col gap-6">
          <Pill />
          <Headline line1="Expert care for" line2="every complexion" />
          <CTAs />
        </div>
      </div>

      {/* ── Desktop layout — content constrained to 1320px ── */}
      <div className="hidden lg:block relative h-[674px]">
        {/* Masked photo — bleeds to right screen edge, ignores max-width */}
        <div className="absolute top-0 right-0 h-full" style={{ width: 957 }}>
          <div className="relative w-full h-full">
            <Image
              src={imgHeroPhoto}
              alt="Dermatology patient"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content constrained to 1320px */}
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
              Expert care for
            </p>
            <p
              className="text-[72px] italic ml-[69px]"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
            >
              every complexion
            </p>
          </div>

          {/* CTAs */}
          <div className="absolute left-6 top-[479px] flex gap-4">
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
