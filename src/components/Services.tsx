const SERVICES = [
  { name: "Men's Haircut", price: "$30", desc: "Cut, style, finish. The cornerstone." },
  {
    name: "Kids' Cut",
    price: "$25",
    desc: "Gentle, fast, and patient — even with the wiggly ones.",
  },
  { name: "Beard Trim & Shave", price: "$20", desc: "Sharp edges. Hot towel. Straight razor." },
  {
    name: "Custom Design",
    price: "$40+",
    desc: "Lines, parts, freehand. Whatever you can dream up.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Services & Pricing</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            Simple menu.
            <span className="gold-gradient-text italic"> Honest prices.</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className={`group flex items-center justify-between gap-6 px-6 sm:px-10 py-7 sm:py-9 hover:bg-card transition-colors ${
                i !== SERVICES.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-2xl sm:text-3xl mb-1 group-hover:text-gold transition-colors">
                  {s.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">{s.desc}</p>
              </div>
              <div className="font-display text-2xl sm:text-3xl text-gold whitespace-nowrap">
                {s.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
