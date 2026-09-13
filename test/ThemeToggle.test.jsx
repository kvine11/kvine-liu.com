import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from "../src/components/ThemeToggle";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

describe("ThemeToggle", () => {
  it("reads the resolved theme, flips it, and remembers the choice", () => {
    document.documentElement.dataset.theme = "light";
    render(<ThemeToggle />);

    const toggle = screen.getByRole("switch", { name: "Cream mode" });
    expect(toggle.getAttribute("aria-checked")).toBe("true");

    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(toggle.getAttribute("aria-checked")).toBe("false");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("still toggles when storage is blocked", () => {
    document.documentElement.dataset.theme = "dark";
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("storage blocked");
    });
    render(<ThemeToggle />);

    const toggle = screen.getByRole("switch", { name: "Cream mode" });
    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(toggle.getAttribute("aria-checked")).toBe("true");
  });
});
