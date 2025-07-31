import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Footer from "./Footer";

test("loads and displays greeting", () => {
  // ARRANGE
  render(<Footer />);

  screen.getByText("Contact Us");
});
