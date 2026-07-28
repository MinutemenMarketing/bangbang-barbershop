import crew1 from "../assets/crew-1.jpg";
import crew2 from "../assets/crew-2.jpg";
import crew3 from "../assets/crew-3.jpg";
import crew4 from "../assets/crew-4.jpg";
import crew5 from "../assets/crew-5.jpg";
import crew6 from "../assets/crew-6.jpg";

const PHOTOS = [
  { src: crew1, alt: "Daytime interior with clients waiting along the bench" },
  { src: crew2, alt: "Barbers cutting hair for a full house of clients" },
  { src: crew3, alt: "Bang Bang Barbershop storefront in daylight" },
  { src: crew4, alt: "Bang Bang Barbershop storefront lit up at night" },
  { src: crew5, alt: "Barber giving a precision cut in the chair" },
  { src: crew6, alt: "Barber working a fresh cut at a lit-mirror station" },
];

export function Crew() {
  return (
    <section id="crew" className="relative py-20 sm:py-28 bg-ink overflow-hidden">
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex gap-6 crew-scroll w-max">
          {[false, true].map((hidden) =>
            PHOTOS.map((p, i) => (
              <figure
                key={`${hidden}-${i}`}
                aria-hidden={hidden || undefined}
                className="relative h-[420px] sm:h-[520px] w-[320px] sm:w-[400px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={p.src}
                  alt={hidden ? "" : p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
