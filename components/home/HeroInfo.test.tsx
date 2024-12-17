import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import TestFile from "./TestFile";

test("renders homepage", () => {
  render(<TestFile />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Hello" })
  ).toBeDefined();
});
