import Eyebrow from "./Eyebrow";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <header className="px-6 pt-20 pb-16 md:px-16 md:pt-[116px] md:pb-[92px]">
      <Eyebrow className="mb-10">{profile.location}</Eyebrow>

      {/* Headings stay light — hierarchy is size and space, not weight. */}
      <h1 className="m-0 text-[clamp(52px,11vw,92px)] leading-[0.98] font-light tracking-[-0.05em]">
        {profile.name}
      </h1>

      <p className="mt-10 max-w-[600px] text-[19px] leading-[1.6] font-light text-pretty text-ink/72">
        {profile.bio}
      </p>
    </header>
  );
}
