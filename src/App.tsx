import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Why } from "./components/Why";
import { Crew } from "./components/Crew";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Why />
        <Crew />
        <Reviews />
        <Services />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
