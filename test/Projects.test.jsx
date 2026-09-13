import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, within } from "@testing-library/react";

// Fixture bands, so the test pins the numbering rule rather than today's copy.
vi.mock("../src/data/site", () => ({
  bands: [
    {
      id: "work",
      name: "Projects",
      entries: [
        { title: "First", year: "2026", description: "a", tags: [] },
        { title: "Second", year: "2025", description: "b", tags: [] },
        {},
      ],
    },
    {
      id: "research",
      name: "Research",
      entries: [{ title: "Third", year: "2024", description: "c", tags: [] }],
    },
  ],
}));

import Projects from "../src/components/Projects";

afterEach(cleanup);

describe("Projects", () => {
  it("numbers entries by position, restarts in each band, and holds open slots", () => {
    const { container } = render(<Projects />);
    const work = within(container.querySelector("#work"));
    const research = within(container.querySelector("#research"));

    expect(work.getByText("01")).toBeTruthy();
    expect(work.getByText("02")).toBeTruthy();
    // An entry with no title is an open slot, still numbered by position.
    expect(work.getByText("03")).toBeTruthy();
    expect(work.getByText("Coming soon")).toBeTruthy();

    expect(research.getByText("01")).toBeTruthy();
    expect(research.queryByText("02")).toBeNull();
  });
});
