import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "My family and I have been going here for as long as I can remember. Best barbershop on Long Island.",
    name: "Dylan E.",
  },
  {
    quote:
      "I drive past 5 barber shops to come here with my two boys. Never much of a wait and always consistently good haircuts.",
    name: "Shaun C.",
  },
  {
    quote:
      "Every experience I have had since 2013 has been professional, precise, and consistent. Every chair is great.",
    name: "Robert K.",
  },
  {
    quote: "Jimmy and the crew always did a great job. Great atmosphere.",
    name: "Matthew L.",
  },
  {
    quote:
      "My youngest is terrified of haircuts. The staff were so kind, understanding, QUICK and professional that even my kid was able to calm down.",
    name: "Yekaterina J.",
  },
  {
    quote: "Clean, modern and all the barbers are excellent. Don't hesitate, go there.",
    name: "yaggi5",
  },
  {
    quote:
      "Since moving to the area, my husband has been coming here — and the talented, incredibly kind staff has always been unmatched. So naturally, when it was time for my son's first haircut, this was our only choice.",
    name: "Michelle L.",
  },
  {
    quote:
      "He's special needs and has some sensory challenges, so those early visits were tough. He cried through every cut, but each time he improved little by little. Eddie has been unbelievably patient, calm, and gentle with him, and it has made all the difference.",
    name: "Michelle L.",
  },
  {
    quote:
      "Today was maybe our 10th visit, and he sat in the chair like a champ — no tears at all! I truly credit the amazing team here. The patience and care they show their clients, young and old, is something special.",
    name: "Michelle L.",
  },
  {
    quote: "We'll never go anywhere else — and honestly, you shouldn't either.",
    name: "Michelle L.",
  },
];

function ReviewCard({ quote, name, active }: { quote: string; name: string; active: boolean }) {
  return (
    <figure
      className={`relative rounded-2xl border bg-card p-8 sm:p-10 h-full transition-all duration-700 ease-out ${
        active ? "border-gold/50 shadow-(--shadow-elegant)" : "border-border"
      }`}
    >
      <span
        aria-hidden
        className="absolute -top-6 left-6 font-display text-7xl text-gold leading-none select-none"
      >
        "
      </span>
      <div className="flex gap-0.5 text-gold mb-4">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="text-foreground/90 leading-relaxed mb-6 whitespace-pre-line">
        {quote}
      </blockquote>
      <figcaption className="text-sm text-muted-foreground border-t border-border pt-4">
        — {name}
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const [index, setIndex] = useState(0);
  const total = REVIEWS.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    // Respect reduced-motion: no auto-advance, arrows and dots still work.
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [total]);

  // Card width as % of viewport row (desktop). Active is centered.
  const CARD_PCT = 44;
  const GAP_PCT = 2;
  const STEP = CARD_PCT + GAP_PCT;

  return (
    <section id="reviews" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">What People Say</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            The reviews do the
            <span className="gold-gradient-text italic"> talking.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Desktop: translating track with a soft, wide edge fade */}
          <div
            className="hidden md:block relative"
            style={{
              // A long, many-stop ramp on each side reads as a true gradient rather
              // than a couple of visible steps. Solid zone is wide enough to fully
              // clear the centered active card so its edges never catch the mask.
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.04) 4%, rgba(0,0,0,0.16) 8%, rgba(0,0,0,0.36) 12%, rgba(0,0,0,0.62) 16%, rgba(0,0,0,0.85) 20%, #000 25%, #000 75%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.62) 84%, rgba(0,0,0,0.36) 88%, rgba(0,0,0,0.16) 92%, rgba(0,0,0,0.04) 96%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.04) 4%, rgba(0,0,0,0.16) 8%, rgba(0,0,0,0.36) 12%, rgba(0,0,0,0.62) 16%, rgba(0,0,0,0.85) 20%, #000 25%, #000 75%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.62) 84%, rgba(0,0,0,0.36) 88%, rgba(0,0,0,0.16) 92%, rgba(0,0,0,0.04) 96%, transparent 100%)",
            }}
          >
            <div
              className="flex items-stretch py-4 will-change-transform"
              style={{
                gap: `${GAP_PCT}%`,
                transform: `translateX(calc(28% - ${index * STEP}%))`,
                transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {REVIEWS.map((r, i) => {
                const isActive = i === index;
                return (
                  <div
                    key={i}
                    className="shrink-0 transition-all duration-700 ease-out"
                    style={{
                      width: `${CARD_PCT}%`,
                      opacity: isActive ? 1 : 0.5,
                      transform: isActive ? "scale(1)" : "scale(0.92)",
                    }}
                    aria-hidden={!isActive}
                  >
                    <ReviewCard quote={r.quote} name={r.name} active={isActive} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: single card with gutter room for arrows */}
          <div className="md:hidden px-12 sm:px-14">
            <ReviewCard {...REVIEWS[index]} active />
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-border bg-ink/80 backdrop-blur flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-border bg-ink/80 backdrop-blur flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
