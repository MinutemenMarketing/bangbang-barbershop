import {
  Clock,
  Baby,
  Sparkles,
  DoorOpen,
  Wifi,
  Zap,
  Bike,
  ParkingSquare,
  Accessibility,
} from "lucide-react";

const ITEMS = [
  {
    icon: Clock,
    title: "No Long Waits",
    body: "Multiple barbers on the floor means you're always next.",
  },
  {
    icon: Baby,
    title: "Great With Kids",
    body: "From first haircuts to fearless toddlers — we've got them.",
  },
  {
    icon: Sparkles,
    title: "A Cut Above",
    body: "Custom designs, precise fades, and a shop you'll come back to.",
  },
];

const AMENITIES = [
  { icon: DoorOpen, label: "Walk-ins Welcome" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Zap, label: "EV Charging Station" },
  { icon: Bike, label: "Bike Parking" },
  { icon: ParkingSquare, label: "Private Lot Parking" },
  { icon: Accessibility, label: "Wheelchair Accessible" },
];

export function Why() {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Why Bang Bang</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            A neighborhood
            <span className="gold-gradient-text italic"> institution.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-card p-8 hover:bg-ink-elevated transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
              <Icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6 text-center">
            Amenities
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center justify-center text-center gap-3 rounded-xl border border-border bg-card px-4 py-6 hover:border-gold/60 transition-colors"
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground/90 leading-tight">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
