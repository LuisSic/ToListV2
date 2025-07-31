import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("navigation links have correct URLs", () => {
    render(<Footer />);

    // Test specific links and their href attributes
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute(
      "href",
      "/support"
    );

    expect(screen.getByRole("link", { name: /faq/i })).toHaveAttribute(
      "href",
      "/support"
    );
    expect(screen.getByRole("link", { name: /reviews/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /legal stuff/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(
      screen.getByRole("link", { name: /private policy/i })
    ).toHaveAttribute("href", "/policy");
  });

  test("displays copyright text", () => {
    render(<Footer />);
    screen.getByText(
      /copyright © 2017-2020 to do, llc\. all rights reserved\./i
    );
  });

  test("links are accessible via keyboard navigation", async () => {
    const user = userEvent.setup();
    render(<Footer />);

    const firstLink = screen.getByRole("link", { name: /contact us/i });

    // Test that links can receive focus (important for accessibility)
    await user.tab();
    expect(firstLink).toHaveFocus();
  });
});
