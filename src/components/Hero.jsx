import Eyebrow from "./Eyebrow";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <header className="px-6 pt-20 pb-16 md:px-16 md:pt-[116px] md:pb-[92px]">
      <Eyebrow accent className="mb-10">
        {profile.location}
      </Eyebrow>

      {/* Nocturne keeps headings light — hierarchy is size and space, not weight. */}
      <h1 className="m-0 text-[clamp(48px,10vw,84px)] leading-[1.02] font-light tracking-[-0.035em]">
        {profile.name}
      </h1>

      <p className="mt-10 max-w-[600px] text-[19px] leading-[1.6] text-pretty text-ink/72">
        {profile.bio}
      </p>
    </header>
  );
}
