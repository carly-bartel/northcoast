import Image from "next/image";
import { imgTeam1, imgTeam2 } from "./assets";

export default function Practice() {
  return (
    <section id="practice" className="w-full bg-[var(--dark)] flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 lg:px-15 py-16 lg:py-20 gap-12 lg:gap-0">
      {/* Left: text */}
      <div className="flex flex-col gap-10 lg:gap-20 lg:w-[558px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:gap-6 leading-none text-[var(--light)]">
            <p className="text-xs font-medium tracking-[1.12px] uppercase">our practice</p>
            <div className="flex flex-col gap-3 lg:gap-4 text-[36px] lg:text-[58px]">
              <p style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                Independently owned.
              </p>
              <p
                className="italic"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
              >
                Dermatologist-led.
              </p>
            </div>
          </div>
          <p className="text-base lg:text-xl leading-[1.4] text-white">
            Our five providers, including four board-certified dermatologists, a
            fellowship-trained Mohs surgeon, and a certified nurse practitioner, bring
            more than 100 years of combined experience.
          </p>
        </div>
        <a
          href="#practice"
          className="bg-[var(--light)] text-[var(--dark)] text-base px-6 py-3 rounded-full self-start hover:opacity-90 transition-opacity"
        >
          Meet Our Team
        </a>
      </div>

      {/* Right: team photo */}
      <div className="relative w-full lg:w-[646px] h-[300px] lg:h-[527px] shrink-0 overflow-hidden">
        <Image src={imgTeam1} alt="Northcoast Dermatology team" fill className="object-cover" />
        <Image src={imgTeam2} alt="Northcoast Dermatology team" fill className="object-cover" />
      </div>
    </section>
  );
}
