import Ground from "./components/Ground";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  // Ground paints the static backdrop gradient and owns the stacking context;
  // 840px keeps the page reading as a document rather than a landing page —
  // narrower than the old 1180px draft, which is also why ProjectEntry no
  // longer splits into a third column at lg.
  return (
    <Ground>
      <div className="mx-auto w-full max-w-[840px]">
        <NavBar />
        <main>
          <Hero />
          <Projects />
        </main>
        <Contact />
      </div>
    </Ground>
  );
}
