import { About } from "./_components/sections/about";
import { Differentials } from "./_components/sections/differentials";
import { Hero } from "./_components/sections/hero";
import { Services } from "./_components/sections/services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Differentials />
    </main>
  );
}
