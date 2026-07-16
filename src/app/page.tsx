import { About } from "@/components/sections/about";
import { AILab } from "@/components/sections/ai-lab";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { ProductThinking } from "@/components/sections/product-thinking";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <ProductThinking />
      <Skills />
      <Projects />
      <AILab />
      <Contact />
    </>
  );
}
