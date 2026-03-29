"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { imgLogoMark, imgLogoText } from "./assets";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Practice", href: "#practice" },
  { label: "Your Visit", href: "#visit" },
];

function isBusinessOpen(): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0");

  const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
  const minutes = hour * 60 + minute;
  return isWeekday && minutes >= 8 * 60 + 30 && minutes < 16 * 60 + 30;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);

  useEffect(() => {
    setBusinessOpen(isBusinessOpen());
  }, []);

  return (
    <header className="w-full relative z-50">
      {/* Top utility bar — hidden on mobile */}
      <div className="hidden md:flex w-full bg-[var(--dark)]">
        <div className="max-w-[1320px] mx-auto w-full flex items-center justify-end gap-12 px-6 py-2">
          <div className="flex items-center gap-2">
            {businessOpen && <span className="dot" />}
            <span className="text-[var(--light)] text-sm">Mon–Fri: 8:30 AM – 4:30 PM</span>
          </div>
          <a href="tel:2165244009" className="text-[var(--light)] text-sm hover:opacity-70 transition-opacity">216.524.4009</a>
          <a
            href="https://maps.google.com/?q=4807+Rockside+Rd+Independence+OH+44131"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--light)] text-sm hidden lg:inline hover:opacity-70 transition-opacity"
          >
            4807 Rockside Rd., Independence, OH 44131
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="w-full">
        <nav className="max-w-[1320px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-1.5">
            <Image
              src={imgLogoText}
              alt="Northcoast Dermatology"
              width={300}
              height={20}
              className="w-[200px] sm:w-[260px] h-auto"
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
              href="#"
              className="bg-[var(--dark)] text-white text-base px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a visit
            </a>
          </div>

          {/* Mobile: book + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#"
              className="bg-[var(--dark)] text-white text-base px-4 py-2.5 rounded-full"
            >
              Book a visit
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[var(--dark)] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[var(--dark)] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[var(--dark)] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
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
            <a href="https://maps.google.com/?q=4807+Rockside+Rd+Independence+OH+44131" target="_blank" rel="noopener noreferrer">4807 Rockside Rd., Independence, OH 44131</a>
          </div>
        </div>
      )}
    </header>
  );
}
