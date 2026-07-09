import { Navbar } from "./_components/layout/Navbar";
import { About } from "./_components/sections/about";
import { Differentials } from "./_components/sections/differentials";
import { FAQ } from "./_components/sections/faq";
import { FinalCTA } from "./_components/sections/final-cta";
import { Hero } from "./_components/sections/hero";
import { HowItWorks } from "./_components/sections/how-it-works";
import { Portfolio } from "./_components/sections/portfolio";
import { Pricing } from "./_components/sections/pricing";
import { Services } from "./_components/sections/services";
import { Testimonials } from "./_components/sections/testimonials";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
