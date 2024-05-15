import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Todo from "../Todo/Todo";

jest.mock("axios");

describe("Todo component", () => {
  test("adds a new todo item when Enter key is pressed with a valid task title", async () => {
    const { getByPlaceholderText } = render(<Todo />);

    const inputElement = getByPlaceholderText(
      "Add a new todo:"
    ) as HTMLInputElement;

    const taskTitle = "New Task";
    fireEvent.change(inputElement, { target: { value: taskTitle } });
    fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://localhost:3000/todos", {
        title: taskTitle.trim(),
        isDeleted: false,
        isCompleted: false,
      });
    });

    expect(inputElement.value).toBe("");
  });

  it("does not add a new todo item when Enter key is pressed with an empty task title", async () => {
    const { getByPlaceholderText } = render(<Todo />);
    const inputElement = getByPlaceholderText(
      "Add a new todo:"
    ) as HTMLInputElement;

    const taskTitle = "";
    fireEvent.change(inputElement, { target: { value: taskTitle } });
    fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });

    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalled();
    });
  });
});
