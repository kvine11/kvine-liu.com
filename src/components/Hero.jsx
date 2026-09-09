import Eyebrow from "./Eyebrow";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <header className="px-6 pt-20 pb-16 md:px-16 md:pt-[116px] md:pb-[92px]">
      <Eyebrow className="mb-10">{profile.location}</Eyebrow>

      {/* Greeting and name are one heading, so a screen reader gets
          "Hi, I'm Kevin Liu" rather than a stray fragment above a title. */}
      <h1 className="m-0 font-light">
        <span className="block text-[clamp(18px,3.6vw,26px)] leading-none tracking-[-0.01em] text-ink/55">
          {profile.greeting}
        </span>
        <span className="mt-3 block text-[clamp(46px,9vw,72px)] leading-[0.98] tracking-[-0.045em]">
          {profile.name}
        </span>
      </h1>

      <p className="mt-10 max-w-[600px] text-[19px] leading-[1.6] font-light text-pretty text-ink/72">
        {profile.bio}
      </p>
    </header>
  );
}
