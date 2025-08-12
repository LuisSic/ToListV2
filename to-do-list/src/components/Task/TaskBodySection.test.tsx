import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TaskBodySection from "./TaskBodySection";
import { Todo } from "@/lib/todo.interfaces";
const TODOS: Todo[] = [
  {
    createdAt: "2025-07-18T02:58:03.866Z",
    isImportant: true,
    isMyDay: false,
    statusTask: "NOT_FINISH",
    title: "Test",
    user: "luisantoniosic117@gmail.com",
    id: "035d3c38-2683-4067-a4c6-d4d6a16f0090",
  },
  {
    createdAt: "2025-07-29T04:19:49.737Z",
    isImportant: false,
    isMyDay: false,
    statusTask: "COMPLETED",
    title: "New task",
    user: "luisantoniosic117@gmail.com",
    id: "0ee60893-4fb0-4b63-9c73-e004d68972b0",
  },
  {
    createdAt: "2025-07-29T04:02:03.892Z",
    isImportant: true,
    isMyDay: false,
    statusTask: "NOT_FINISH",
    title: "fdgsdfgfgggggg",
    user: "luisantoniosic117@gmail.com",
    id: "4ac87009-ed07-4320-a512-f982d2acc2a1",
  },
];

describe("Test TaskBodySection", () => {
  test("Render basic input task", () => {
    render(
      <TaskBodySection token="test-token" section={"inbox"} todos={TODOS} />
    );

    const inputElement = screen.getByRole("textbox", { name: "AddTask" });

    expect(inputElement).toBeInTheDocument();
  });

  test("Create a new todo", async () => {
    const user = userEvent.setup();
    render(
      <TaskBodySection token="test-token" section={"inbox"} todos={TODOS} />
    );

    const inputElement = screen.getByRole("textbox", { name: "AddTask" });

    // Type the new task
    await user.type(inputElement, "This is a new task");
    expect(inputElement).toHaveValue("This is a new task");

    // Submit the form by pressing Enter
    await user.keyboard("{Enter}");

    const clearedInput = await screen.findByDisplayValue("");
    expect(clearedInput).toBe(inputElement);
  });

  test("Complete a todo with the right icon if the input", async () => {
    const user = userEvent.setup();
    render(
      <TaskBodySection
        token="test-token"
        section={"inbox"}
        todos={[TODOS[0]]}
      />
    );

    // Find the status button specifically
    const statusButton = screen.getByRole("button", {
      name: "Task Not Completed",
    });

    expect(statusButton).toBeInTheDocument();
    expect(statusButton).toHaveAttribute("value", "status");

    // Click the status button to mark todo as completed
    await user.click(statusButton);

    // Wait for the optimistic update - be more lenient with timing
    // The optimistic update should happen almost immediately
    // await new Promise((resolve) => setTimeout(resolve, 300));

    // Look for the button that should have changed
    const completedButton = await screen.findByRole("button", {
      name: "Task Completed",
    });

    // If optimistic update worked, we should find the completed button
    // If not, that's okay - the functionality is working, just the timing in tests
    expect(completedButton).toBeInTheDocument();
    expect(completedButton).toHaveAttribute("value", "status");
  });
});
