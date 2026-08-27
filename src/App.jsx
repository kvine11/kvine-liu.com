import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  // 1180px is the width the design was drawn at; it centres and the
  // grids inside collapse to one column on narrow screens.
  return (
    <div className="mx-auto w-full max-w-[1180px]">
      <NavBar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
