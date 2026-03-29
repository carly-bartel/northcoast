import Image from "next/image";
import { imgServiceCosmetic, imgServiceGeneral1, imgServiceSurgical } from "./assets";

const services = [
  {
    image: imgServiceGeneral1,
    title: "General Dermatology",
    description:
      "Complete medical skin care for conditions affecting patients of every age, from common concerns to complex diagnoses.",
    tags: ["Cancer Screening", "Acne", "Eczema", "Rosacea", "Psoriasis", "Warts", "Vitiligo"],
  },
  {
    image: imgServiceSurgical,
    title: "Surgical Dermatology",
    description:
      "Advanced surgical treatments including Mohs micrographic surgery, performed by our fellowship-trained dermatologic surgeon.",
    tags: ["Mohs surgery", "Cutaneous Oncology", "Lesion Removal", "Sclerotherapy"],
  },
  {
    image: imgServiceCosmetic,
    title: "Cosmetic & Laser",
    description:
      "Rejuvenation treatments designed to help you look and feel your best, from injectables to laser-based therapies.",
    tags: ["Botox", "Dermal Fillers", "Chemical Peels", "Laser Hair Removal", "Facial Rejuvenation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full max-w-[1320px] mx-auto px-6 py-12 flex flex-col gap-10 lg:gap-12">
      {/* Heading row */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-[580px]">
          <p className="text-xs font-medium tracking-[1.12px] uppercase text-[var(--dark)]">
            What we treat
          </p>
          <div className="flex flex-wrap items-end gap-3 lg:gap-4 text-[36px] lg:text-[58px] leading-none text-[var(--dark)]">
            <span style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Popular
            </span>
            <span
              className="italic"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
            >
              services
            </span>
          </div>
        </div>
        <a
          href="#"
          className="bg-[var(--dark)] text-white text-base px-6 py-3 rounded-full hover:opacity-90 transition-opacity self-start sm:self-auto shrink-0"
        >
          See all services
        </a>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
        {services.map((service) => (
          <a key={service.title} href="#" className="flex flex-col gap-4 group">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[536px] bg-[var(--dark)] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-2xl lg:text-[32px] leading-[1.4] text-[var(--dark)]">
                  {service.title}
                </p>
                <p className="text-base leading-[1.4] text-[var(--dark)]">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--light)] text-[var(--dark)] text-base px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
