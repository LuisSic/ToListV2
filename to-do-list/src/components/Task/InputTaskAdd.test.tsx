import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import InputTaskAdd from "./InputTaskAdd";

describe("Input Task test", () => {
  test("Render basic input task", () => {
    render(
      <InputTaskAdd token="test-token" isImportant={false} isMyDay={false} />
    );
  });
});
