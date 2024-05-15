import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

beforeEach(() => {
  jest.spyOn(window, "prompt").mockReturnValueOnce("Go for a run");
  render(<TodoList />);
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("changes complete status when the complete button is clicked", () => {
  const completeButton = screen.getAllByTestId("complete-button")[0];

  const initialDataIconValue = completeButton.dataset.icon;

  expect(initialDataIconValue).toMatch(/xmark|check/);

  fireEvent.click(completeButton);

  const updatedDataIconValue = completeButton.dataset.icon;

  expect(updatedDataIconValue).not.toBe(initialDataIconValue);
  expect(updatedDataIconValue).toMatch(/xmark|check/);
});

test("deletes a todo from the list", () => {
  const deletedTodoId = screen.getAllByTestId("todo-item")[0];

  const initialTodoCount = screen.getAllByTestId("complete-button").length;
  console.log(initialTodoCount);

  fireEvent.click(screen.getAllByTestId("delete-button")[0]);

  const remainingTodoCount = screen.getAllByTestId("complete-button").length;

  console.log(remainingTodoCount);

  expect(remainingTodoCount).toBe(initialTodoCount - 1);
  expect(deletedTodoId).not.toBeInTheDocument();
});

test("should add a new todo item", () => {
  const input = screen.getByPlaceholderText("add new todo");
  const submitButton = screen.getByRole("button", { name: /Add Todo/i });

  fireEvent.change(input, { target: { value: "go for a walk" } });
  fireEvent.click(submitButton);

  expect(screen.getByText("go for a walk")).toBeInTheDocument();
});

test("should edit the title of a todo item", () => {
  // Add a todo item to test the edit on it
  const input = screen.getByPlaceholderText("add new todo");
  const submitButton = screen.getByRole("button", { name: /Add Todo/i });
  fireEvent.change(input, { target: { value: "Go for a walk" } });
  fireEvent.click(submitButton);

  const editButton = screen.getAllByTestId("edit-button")[0];
  fireEvent.click(editButton);

  expect(window.prompt).toHaveBeenCalledWith(
    "edit todo's title",
    "Go for a walk"
  );

  expect(screen.getByText("Go for a run")).toBeInTheDocument();
});
