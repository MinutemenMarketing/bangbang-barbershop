import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex flex-col items-center leading-none group"
          aria-label="Bang Bang Barbershop — home"
        >
          <span className="font-display text-white text-[0.68rem] sm:text-[0.8rem] tracking-[0.35em] pl-[0.35em] mb-1">
            BANG BANG
          </span>
          <span className="font-display text-gold text-xl sm:text-3xl tracking-[0.02em] group-hover:brightness-110 transition">
            BARBERSHOP
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          <a href="#why" className="hover:text-gold transition-colors">
            Why Us
          </a>
          <a href="#crew" className="hover:text-gold transition-colors">
            The Shop
          </a>
          <a href="#reviews" className="hover:text-gold transition-colors">
            Reviews
          </a>
          <a href="#services" className="hover:text-gold transition-colors">
            Services
          </a>
          <a href="#visit" className="hover:text-gold transition-colors">
            Visit
          </a>
        </nav>

        <a
          href="tel:+16319796056"
          className="inline-flex items-center gap-2 rounded-sm bg-gold px-4 sm:px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition shadow-(--shadow-gold)"
        >
          Call to Book
        </a>
      </div>
    </header>
  );
}
