import { ReactNode } from "react";

const cards: { label: string; body: ReactNode; cta: string; href: string }[] = [
  {
    label: "Before Your Visit",
    body: "Bring a list of all medications and supplements, your insurance card, a photo ID, and any prior dermatology records to help us provide the best possible care from day one.",
    cta: "Be prepared",
    href: "#visit",
  },
  {
    label: "Our Location",
    body: (
      <>
        4807 Rockside Rd.
        <br />
        Suite 100
        <br />
        Independence, OH 44131
        <br />
        <br />
        Ample parking available on-site.
      </>
    ),
    cta: "Get directions",
    href: "https://maps.google.com/?q=4807+Rockside+Rd+Suite+100+Independence+OH+44131",
  },
  {
    label: "Office Hours",
    body: (
      <>
        Monday – Friday
        <br />
        8:30 AM to 4:30 PM
        <br />
        <br />
        Call us to schedule or request an appointment. Same-week appointments often
        available.
      </>
    ),
    cta: "Book now",
    href: "tel:2165244009",
  },
];

export default function InfoCards() {
  return (
    <section id="visit" className="w-full max-w-[1440px] mx-auto px-6 lg:px-15 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-[var(--lighter)] border border-[var(--light)] flex flex-col gap-8 lg:gap-10 p-8 lg:p-12"
          >
            <div className="flex flex-col gap-6 lg:gap-8 flex-1 text-[var(--dark)]">
              <p className="text-xs font-medium tracking-[1.12px] uppercase leading-none">
                {card.label}
              </p>
              <p className="text-base lg:text-xl leading-[1.4]">{card.body}</p>
            </div>
            <a
              href={card.href}
              className="bg-[var(--dark)] text-[var(--light)] text-sm lg:text-base px-6 py-3 rounded-full self-start hover:opacity-90 transition-opacity"
            >
              {card.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
