import FadingRule from "./FadingRule";
import ProjectEntry from "./ProjectEntry";
import PlaceholderEntry from "./PlaceholderEntry";
import Reveal from "./Reveal";
import { projects, projectsRange } from "../data/site";

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-16">
      <div className="flex items-baseline justify-between pb-[11.2px] font-mono text-[11px] tracking-[0.16em] uppercase text-ink/50">
        <span>Projects</span>
        <span>{projectsRange}</span>
      </div>

      <FadingRule />

      {/* Each entry fades/lifts into view once as it's scrolled to — this is
          the thing that'll matter more as more projects get added below. A
          rule closes every entry, including the last. */}
      {projects.map((project) => (
        <Reveal key={project.number}>
          {project.title ? (
            <ProjectEntry {...project} />
          ) : (
            <PlaceholderEntry number={project.number} />
          )}
          <FadingRule />
        </Reveal>
      ))}
    </section>
  );
}
