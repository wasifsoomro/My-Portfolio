import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projectspage from "./components/Project";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Skills />
      <Projectspage />
    </main>
  );
}
