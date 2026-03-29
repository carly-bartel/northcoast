import Image from "next/image";
import { imgFacebook, imgInstagram, imgLogoText, imgMarqueeIcon } from "./assets";

const marqueeItems = [
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

const quickLinks = ["Our Practice", "Services", "Your Visit", "Book a Visit"];

export default function Footer() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <footer className="w-full bg-[var(--dark)]">
      {/* Marquee strip — intentionally full-width */}
      <div className="w-full bg-[var(--lighter)] overflow-hidden py-4">
        <div className="flex items-center gap-8 animate-marquee w-max">
          {repeated.map((item, i) => (
            <MarqueeItem key={i} label={item} />
          ))}
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-[1320px] mx-auto px-6 pt-12 lg:pt-20 pb-10 lg:pb-16 flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-0">
          {/* Brand column */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:w-[326px]">
            <Image
              src={imgLogoText}
              alt="Northcoast Dermatology"
              width={280}
              height={32}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-[var(--lighter)] text-base leading-[1.6]">
              Providing state-of-the-art medical, surgical, and cosmetic dermatological
              care to patients of all ages in Northeast Ohio since 1990.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image src={imgFacebook} alt="Northcoast Dermatology on Facebook" width={32} height={32} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image src={imgInstagram} alt="Northcoast Dermatology on Instagram" width={32} height={32} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            <div className="flex flex-col gap-4 lg:gap-6">
              <p className="text-[var(--mid)] text-xs font-medium tracking-[1.12px] uppercase leading-none">
                visit
              </p>
              <a
                href="https://maps.google.com/?q=4807+Rockside+Rd+Ste+100+Independence+OH+44131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--lighter)] text-base leading-[1.4] hover:text-[var(--mid)] transition-colors"
              >
                One Independence Place
                <br />
                4807 Rockside Rd., Ste 100
                <br />
                Independence, OH 44131
              </a>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <p className="text-[var(--mid)] text-xs font-medium tracking-[1.12px] uppercase leading-none">
                contact
              </p>
              <div className="text-[var(--lighter)] text-base leading-[1.4]">
                <p>
                  Phone:{" "}
                  <a href="tel:2165244009" className="hover:text-[var(--mid)] transition-colors">
                    216-524-4009
                  </a>
                </p>
                <p>Fax: 216-524-7933</p>
              </div>
              <p className="text-[var(--lighter)] text-base leading-[1.4]">
                Monday – Friday
                <br />
                8:30 AM – 4:30 PM
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6 col-span-2 md:col-span-1">
              <p className="text-[var(--mid)] text-xs font-medium tracking-[1.12px] uppercase leading-none">
                quick links
              </p>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 lg:gap-6">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[var(--lighter)] text-base leading-[1.4] hover:text-[var(--mid)] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 lg:gap-6 text-[var(--mid)] border-t border-[rgba(152,185,179,0.2)] pt-8">
          <p className="text-xs leading-[1.5]">
            If you think you are having a medical emergency, call 911 immediately. Do not rely on
            electronic communications or communication through this website for immediate, urgent
            medical needs. This website is not designed to facilitate medical emergencies.
          </p>
          <div className="flex flex-wrap gap-6 lg:gap-12 text-sm">
            <span>© 2026 Northcoast Dermatology</span>
            <a href="#" className="hover:text-[var(--lighter)] transition-colors">Privacy Notice</a>
            <a href="#" className="hover:text-[var(--lighter)] transition-colors">Dr. Sign In</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
