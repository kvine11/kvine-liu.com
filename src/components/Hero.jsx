import Eyebrow from "./Eyebrow";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <header className="px-6 pt-20 pb-16 md:px-16 md:pt-[116px] md:pb-[92px]">
      <Eyebrow className="mb-10">{profile.location}</Eyebrow>

      {/* Greeting and name are one heading: a screen reader should get "Hi,
          I'm Kevin Liu", not a stray fragment above an unrelated title. The
          greeting is set smaller and quieter so the name still lands as the
          thing you read — it introduces the name rather than competing with
          it.

          The name runs smaller than it used to (was clamp(52,11vw,92)). At
          92px it was doing all the talking and left no room for anything to
          precede it; at this size the greeting fits above it and the whole
          block still clears the 38px band headings comfortably. Headings
          stay light — hierarchy is size and space, not weight. */}
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
