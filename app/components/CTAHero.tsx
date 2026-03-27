import Image from "next/image";
import { imgDot, imgHeroMask, imgHeroPhoto, imgHeroPhotoAlt } from "./assets";

const gradient = "linear-gradient(107.67deg, #e2edeb 23.13%, #f1f9ff 70.226%)";

export default function CTAHero() {
  return (
    <section className="w-full overflow-hidden" style={{ background: gradient }}>
      {/* ── Mobile layout ── */}
      <div className="lg:hidden flex flex-col">
        <div className="relative w-full h-[280px]">
          <Image
            src={imgHeroPhoto}
            alt="Dermatology care"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="px-6 py-8 flex flex-col gap-6">
          <div className="flex items-center gap-3 bg-white rounded-full px-3 py-2 self-start">
            <Image src={imgDot} alt="" width={9} height={9} />
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
          <p className="text-base leading-[1.4] text-[var(--dark)]">
            We are currently accepting new patients. Schedule your appointment today and
            take the first step toward expert dermatologic care.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:2165244009"
              className="bg-[var(--dark)] text-white text-lg px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Visit
            </a>
            <a
              href="tel:2165244009"
              className="border border-[var(--dark)] text-[var(--dark)] text-lg px-6 py-3 rounded-full hover:bg-[var(--dark)] hover:text-white transition-colors"
            >
              216.524.4009
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:block relative h-[674px]">
        {/* Masked photo */}
        <div
          className="absolute top-0 right-0 h-full"
          style={{
            width: 957,
            maskImage: `url('${imgHeroMask}')`,
            maskSize: "807px 690px",
            maskPosition: "42px -16px",
            maskRepeat: "no-repeat",
          }}
        >
          <Image src={imgHeroPhoto} alt="Dermatology care" fill className="object-cover" />
          <div className="absolute inset-0 overflow-hidden">
            <Image src={imgHeroPhotoAlt} alt="" fill className="object-cover" />
          </div>
        </div>

        {/* Pill */}
        <div className="absolute top-10 left-[61px] flex items-center gap-3 bg-white rounded-full px-3 py-2">
          <Image src={imgDot} alt="" width={9} height={9} />
          <span className="text-base text-[var(--dark)]">Accepting New Patients</span>
        </div>

        {/* Headline */}
        <div className="absolute left-[61px] top-[159px] leading-none text-[var(--dark)]">
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
        <p className="absolute left-[61px] top-[350px] text-xl leading-[1.4] text-[var(--dark)] max-w-[438px]">
          We are currently accepting new patients. Schedule your appointment today and
          take the first step toward expert dermatologic care.
        </p>

        {/* CTAs */}
        <div className="absolute left-[61px] top-[549px] flex gap-4">
          <a
            href="tel:2165244009"
            className="bg-[var(--dark)] text-white text-xl px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Visit
          </a>
          <a
            href="tel:2165244009"
            className="border border-[var(--dark)] text-[var(--dark)] text-xl px-6 py-3 rounded-full hover:bg-[var(--dark)] hover:text-white transition-colors"
          >
            216.524.4009
          </a>
        </div>
      </div>
    </section>
  );
}
