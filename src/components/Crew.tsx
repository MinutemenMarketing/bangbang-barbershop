import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Seamless infinite scroll driven by requestAnimationFrame. We measure the
  // exact pixel width of the first (real) set and wrap by modulo, so the reset
  // is invisible — no %-based rounding jerk, no rubber-band snap.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let offset = 0;
    let last = performance.now();
    const SPEED = 60; // px per second

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      offset += SPEED * dt;
      const half = track.scrollWidth / 2; // first set = half of the doubled track
      if (half > 0 && offset >= half) offset -= half; // wrap exactly at the seam
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    [],
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    // Lock body scroll while the lightbox is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, prev, next]);

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
        <div ref={trackRef} className="flex w-max will-change-transform">
          {[false, true].map((dup) =>
            PHOTOS.map((p, i) => (
              <figure
                key={`${dup}-${i}`}
                aria-hidden={dup || undefined}
                className="group relative h-[420px] sm:h-[520px] w-[320px] sm:w-[400px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card mr-6"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Enlarge photo: ${p.alt}`}
                  className="block h-full w-full cursor-zoom-in"
                  tabIndex={dup ? -1 : 0}
                >
                  <img
                    src={p.src}
                    alt={dup ? "" : p.alt}
                    loading={dup ? "lazy" : "eager"}
                    decoding="async"
                    width={400}
                    height={520}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
                </button>
              </figure>
            )),
          )}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 h-11 w-11 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white hover:border-gold hover:text-gold transition"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white hover:border-gold hover:text-gold transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={PHOTOS[lightbox].src}
              alt={PHOTOS[lightbox].alt}
              className="max-h-[80vh] w-auto mx-auto rounded-xl border border-white/10 object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {PHOTOS[lightbox].alt}
              <span className="mx-2 text-white/30">·</span>
              {lightbox + 1} / {PHOTOS.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white hover:border-gold hover:text-gold transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
