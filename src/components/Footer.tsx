import { Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Scissors className="h-5 w-5 text-gold" />
            <span className="font-display text-2xl">Bang Bang Barbershop</span>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a href="#why" className="hover:text-gold transition-colors">
              Why Us
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
        </div>

        <div className="hairline my-10 opacity-40" />

        <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>Smithtown's neighborhood barbershop.</p>
          <p>
            © {new Date().getFullYear()} Bang Bang Barbershop. All rights reserved.{" "}
            <a
              href="https://minutemenmarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Powered by Minutemen Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
