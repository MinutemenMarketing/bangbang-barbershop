import { Star } from "lucide-react";

const QUOTES = [
  "Best barbershop on Long Island. — Dylan E.",
  "I drive past 5 barber shops to come here with my two boys. — Shaun C.",
  "Every chair is great. Professional, precise, consistent. — Robert K.",
  "Jimmy and the crew always did a great job. Great atmosphere. — Matthew L.",
  "So kind with my youngest — even calmed him down for his cut. — Yekaterina J.",
  "Clean, modern and all the barbers are excellent. Don't hesitate, go there. — yaggi5",
  "Never much of a wait and always consistently good haircuts. — Shaun C.",
  "Been going here as long as I can remember. — Dylan E.",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <>
      {QUOTES.map((q, i) => (
        <div
          key={i}
          aria-hidden={hidden || undefined}
          className="flex items-center gap-3 px-8 shrink-0"
        >
          <div className="flex gap-0.5 text-gold">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{q}</span>
          <span className="text-gold/40">✦</span>
        </div>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div className="relative border-y border-border bg-ink overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
      <div className="flex marquee whitespace-nowrap py-5">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
