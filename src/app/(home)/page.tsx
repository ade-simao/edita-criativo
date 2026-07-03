import { About } from "./_components/sections/about";
import { Differentials } from "./_components/sections/differentials";
import { Hero } from "./_components/sections/hero";
import { HowItWorks } from "./_components/sections/how-it-works";
import { Portfolio } from "./_components/sections/portfolio";
import { Pricing } from "./_components/sections/pricing";
import { Services } from "./_components/sections/services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Portfolio />
      <HowItWorks />
      <Pricing />
    </main>
  );
}
