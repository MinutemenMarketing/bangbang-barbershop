import { MapPin, Phone, Clock } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="relative py-28 sm:py-36 grain overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-ink to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.35_0_0_/_0.35),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Book Your Chair</div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
            Ready to look
            <span className="gold-gradient-text italic"> sharp?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Walk-ins welcome. Call ahead if you want a specific chair.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+16319796056"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground hover:brightness-110 transition shadow-(--shadow-gold)"
            >
              <Phone className="h-4 w-4" />
              Call to Book
            </a>
            <a
              href="https://maps.google.com/?q=548+Smithtown+Bypass,+Smithtown,+NY+11787"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium hover:border-gold hover:text-gold transition"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border mb-10">
          <div className="bg-card p-8">
            <MapPin className="h-5 w-5 text-gold mb-4" strokeWidth={1.5} />
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Visit</div>
            <p className="text-base leading-relaxed text-foreground/90">
              548 Smithtown Bypass
              <br />
              Smithtown, NY 11787
            </p>
          </div>
          <div className="bg-card p-8">
            <Phone className="h-5 w-5 text-gold mb-4" strokeWidth={1.5} />
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Call</div>
            <p className="text-base leading-relaxed text-foreground/90">
              <a href="tel:+16319796056" className="hover:text-gold transition-colors">
                (631) 979-6056
              </a>
            </p>
          </div>
          <div className="bg-card p-8">
            <Clock className="h-5 w-5 text-gold mb-4" strokeWidth={1.5} />
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Hours</div>
            <p className="text-base leading-relaxed text-foreground/90">
              Mon–Fri · 8:30AM–6:30PM
              <br />
              Sat · 8AM–6PM
              <br />
              Sun · 9AM–4PM
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border aspect-16/7 bg-card">
          <iframe
            title="Map to Bang Bang Barbershop"
            src="https://www.google.com/maps?q=548+Smithtown+Bypass,+Smithtown,+NY+11787&output=embed"
            className="w-full h-full grayscale contrast-125 brightness-75"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
