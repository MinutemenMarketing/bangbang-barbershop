import heroImg from "../assets/hero-interior.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grain">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Barbers working a full floor of chairs inside Bang Bang Barbershop"
          width={680}
          height={510}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl hero-enter">
          <div className="flex items-center gap-3 mb-6 text-xs tracking-[0.3em] uppercase text-gold">
            <span className="h-px w-10 bg-gold" />
            Est. Smithtown · Long Island
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight">
            Bang Bang
            <br />
            <span className="gold-gradient-text">Barbershop</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Long Island's most trusted barbershop for over a decade. Precision cuts, no long
            waits, and a chair that feels like home.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+16319796056"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground hover:brightness-110 transition shadow-(--shadow-gold)"
            >
              Call to Book
            </a>
            <a
              href="#reviews"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium text-foreground hover:border-gold hover:text-gold transition"
            >
              Read Reviews
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-sm text-muted-foreground pl-1 sm:pl-7">
            <div>
              <div className="text-2xl font-display text-gold">5★</div>
              <div>Google Rated</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-display text-gold">Kid</div>
              <div>Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
