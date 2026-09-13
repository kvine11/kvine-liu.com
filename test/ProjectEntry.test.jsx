import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import ProjectEntry from "../src/components/ProjectEntry";

afterEach(cleanup);

describe("ProjectEntry", () => {
  it("makes the title the link when the entry has a single href", () => {
    render(
      <ProjectEntry
        number="02"
        title="YouthWell"
        year="2025"
        meta="Code4Hope Hackathon"
        description="A mental health platform for teens."
        tags={["React"]}
        href="https://example.com/youthwell"
      />
    );

    const heading = screen.getByRole("heading", { level: 3 });
    const link = within(heading).getByRole("link");
    expect(link.getAttribute("href")).toBe("https://example.com/youthwell");
    expect(link.getAttribute("target")).toBe("_blank");
    // One destination means no labelled rows restating the title.
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(screen.getByText("2025")).toBeTruthy();
  });

  it("gives each destination its own row and leaves the title plain when the entry has links", () => {
    render(
      <ProjectEntry
        number="01"
        title="FRC Programming"
        year="2024 – 2026"
        description="Autonomous robot code."
        tags={[]}
        links={[
          {
            year: "2026",
            label: "Rebuilt",
            href: "https://example.com/rebuilt",
          },
          {
            year: "2025",
            label: "Reefscape",
            href: "https://example.com/reefscape",
          },
        ]}
      />
    );

    const heading = screen.getByRole("heading", { level: 3 });
    expect(within(heading).queryByRole("link")).toBeNull();

    const rows = screen.getAllByRole("link");
    expect(rows.map((row) => row.getAttribute("href"))).toEqual([
      "https://example.com/rebuilt",
      "https://example.com/reefscape",
    ]);
    expect(rows[0].textContent).toContain("2026");
    expect(rows[0].textContent).toContain("Rebuilt");
  });
});
