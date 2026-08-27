import LiveGround from "./components/LiveGround";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  // LiveGround paints the drifting accent glow and owns the stacking context;
  // 1180px is the width the design was drawn at, and the grids inside it
  // collapse to one column on narrow screens.
  return (
    <LiveGround>
      <div className="mx-auto w-full max-w-[1180px]">
        <NavBar />
        <main>
          <Hero />
          <Projects />
        </main>
        <Contact />
      </div>
    </LiveGround>
  );
}
