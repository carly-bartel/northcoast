"use client";

import Image from "next/image";
import { useState } from "react";
import { imgDot, imgLogoMark, imgLogoText } from "./assets";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Practice", href: "#practice" },
  { label: "Your Visit", href: "#visit" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top utility bar — hidden on mobile */}
      <div className="hidden md:flex w-full bg-[var(--dark)] items-center justify-end gap-12 px-6 lg:px-15 py-2">
        <div className="flex items-center gap-2">
          <Image src={imgDot} alt="" width={9} height={9} />
          <span className="text-[var(--light)] text-sm">Mon–Fri: 8:30 AM – 4:30 PM</span>
        </div>
        <span className="text-[var(--light)] text-sm">216.524.4009</span>
        <span className="text-[var(--light)] text-sm hidden lg:inline">
          4807 Rockside Rd., Independence, OH 44131
        </span>
      </div>

      {/* Main nav */}
      <nav className="w-full flex items-center justify-between px-6 lg:px-15 py-4">
        <a href="/" className="flex items-center gap-1.5">
          <Image src={imgLogoMark} alt="" width={35} height={35} />
          <Image
            src={imgLogoText}
            alt="Northcoast Dermatology"
            width={200}
            height={20}
            className="hidden sm:block"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-base text-[var(--dark)]">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:opacity-60 transition-opacity">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="tel:2165244009"
            className="bg-[var(--dark)] text-white text-base px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a visit
          </a>
        </div>

        {/* Mobile: book + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:2165244009"
            className="bg-[var(--dark)] text-white text-sm px-4 py-2.5 rounded-full"
          >
            Book a visit
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--dark)] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--dark)] transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--dark)] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[var(--light)] shadow-lg px-6 py-6 flex flex-col gap-6 z-50">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-[var(--dark)] hover:opacity-60 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="border-t border-[var(--light)] pt-5 flex flex-col gap-2 text-sm text-[var(--dark)]">
            <p>Mon–Fri: 8:30 AM – 4:30 PM</p>
            <a href="tel:2165244009" className="font-medium">216.524.4009</a>
            <p>4807 Rockside Rd., Independence, OH 44131</p>
          </div>
        </div>
      )}
    </header>
  );
}
