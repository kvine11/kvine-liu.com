import Ground from "./components/Ground";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  // Ground owns the stacking context; 840px keeps the page reading as a
  // document rather than a landing page.
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
