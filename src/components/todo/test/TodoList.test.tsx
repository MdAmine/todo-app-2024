import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as todosService from "../../../service/todos.service";
import TodoList from "../TodoList";

const mockTodos = [
  {
    id: "1e4f6364-3e9a-45ab-aecc-88a56e12c805",
    title: "Clean the house",
    complete: false,
    priority: "P2",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Go for a run",
    complete: true,
    priority: "P3",
  },
];

beforeEach(() => {
  jest.spyOn(todosService, "getAllTodos").mockResolvedValue(mockTodos);
  jest.spyOn(todosService, "getTodoById").mockImplementation((id) => {
    return Promise.resolve(mockTodos.find((todo) => todo.id === id));
  });
  jest.spyOn(todosService, "updateTodo").mockImplementation((updatedTodo) => {
    const id = updatedTodo.id;
    jest
      .spyOn(todosService, "getAllTodos")
      .mockResolvedValue(
        mockTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    return Promise.resolve(updatedTodo);
  });

  jest.spyOn(todosService, "addTodo").mockImplementation((addedTodo) => {
    jest
      .spyOn(todosService, "getAllTodos")
      .mockResolvedValue([...mockTodos, addedTodo]);
    return Promise.resolve(addedTodo);
  });

  jest.spyOn(todosService, "deleteTodo").mockImplementation((id) => {
    jest
      .spyOn(todosService, "getAllTodos")
      .mockResolvedValue(mockTodos.filter((todo) => todo.id !== id));
    return Promise.resolve(id);
  });

  jest.spyOn(window, "prompt").mockReturnValueOnce("Go for a walk");
  render(
    <BrowserRouter>
      <TodoList />
    </BrowserRouter>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test("fetches and displays todos", async () => {
  await waitFor(() =>
    expect(todosService.getAllTodos).toHaveBeenCalledTimes(1)
  );

  mockTodos.forEach((todo) => {
    expect(screen.getByText(todo.title)).toBeInTheDocument();
  });
});

test("changes complete status when the complete button is clicked", async () => {
  await waitFor(() =>
    expect(todosService.getAllTodos).toHaveBeenCalledTimes(1)
  );

  const completeButton = screen.getAllByTestId("complete-button")[0];

  const initialDataIconValue = completeButton.dataset.icon;

  expect(initialDataIconValue).toMatch(/xmark|check/);

  fireEvent.click(completeButton);

  await waitFor(() =>
    expect(todosService.getTodoById).toHaveBeenCalledTimes(1)
  );
  await waitFor(() => expect(todosService.updateTodo).toHaveBeenCalledTimes(1));

  await waitFor(() => {
    const updatedDataIconValue = completeButton.dataset.icon;

    expect(updatedDataIconValue).not.toBe(initialDataIconValue);
    expect(updatedDataIconValue).toMatch(/xmark|check/);
  });
});

test("deletes a todo from the list", async () => {
  await waitFor(() =>
    expect(todosService.getAllTodos).toHaveBeenCalledTimes(1)
  );

  const initialTodoCount = screen.getAllByTestId("todo-item").length;
  const deleteButton = screen.getAllByTestId("delete-button")[0];

  fireEvent.click(deleteButton);

  await waitFor(() => expect(todosService.deleteTodo).toHaveBeenCalledTimes(1));

  const remainingTodoCount = screen.getAllByTestId("todo-item").length;

  expect(remainingTodoCount).toBe(initialTodoCount - 1);
});

test("should add a new todo item", async () => {
  const input = screen.getByPlaceholderText("add new todo");
  const submitButton = screen.getByRole("button", { name: /Add Todo/i });

  fireEvent.change(input, { target: { value: "go for a walk" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(todosService.addTodo).toHaveBeenCalledTimes(1);
  });

  expect(screen.getByText("go for a walk")).toBeInTheDocument();
});

test("should edit the title of a todo item", async () => {
  await waitFor(() =>
    expect(todosService.getAllTodos).toHaveBeenCalledTimes(1)
  );

  const editButton = screen.getAllByTestId("edit-button")[0];

  fireEvent.click(editButton);

  await waitFor(() =>
    expect(window.prompt).toHaveBeenCalledWith(
      "Edit todo's title",
      "Clean the house"
    )
  );

  fireEvent.click(editButton);

  await waitFor(() =>
    expect(screen.getByText("Go for a run")).toBeInTheDocument()
  );
});

/**************************************************************************************************************************************** */
/* 
These tests were written for the previous commits, before the changes made in the TodoList component (add json server) at the last commit:
Commit: d6a530ce1c9a8ac08c003a740ac3263a94ff96cd => feat: add TodoList tests
*/

// import { fireEvent, render, screen } from "@testing-library/react";
// import TodoList from "../TodoList";

// beforeEach(() => {
//   jest.spyOn(window, "prompt").mockReturnValueOnce("Go for a run");
//   render(<TodoList />);
// });

// afterAll(() => {
//   jest.restoreAllMocks();
// });

// test("changes complete status when the complete button is clicked", () => {
//   const completeButton = screen.getAllByTestId("complete-button")[0];

//   const initialDataIconValue = completeButton.dataset.icon;

//   expect(initialDataIconValue).toMatch(/xmark|check/);

//   fireEvent.click(completeButton);

//   const updatedDataIconValue = completeButton.dataset.icon;

//   expect(updatedDataIconValue).not.toBe(initialDataIconValue);
//   expect(updatedDataIconValue).toMatch(/xmark|check/);
// });

// test("deletes a todo from the list", () => {
//   const deletedTodoId = screen.getAllByTestId("todo-item")[0];

//   const initialTodoCount = screen.getAllByTestId("complete-button").length;
//   console.log(initialTodoCount);

//   fireEvent.click(screen.getAllByTestId("delete-button")[0]);

//   const remainingTodoCount = screen.getAllByTestId("complete-button").length;

//   console.log(remainingTodoCount);

//   expect(remainingTodoCount).toBe(initialTodoCount - 1);
//   expect(deletedTodoId).not.toBeInTheDocument();
// });

// test("should add a new todo item", () => {
//   const input = screen.getByPlaceholderText("add new todo");
//   const submitButton = screen.getByRole("button", { name: /Add Todo/i });

//   fireEvent.change(input, { target: { value: "go for a walk" } });
//   fireEvent.click(submitButton);

//   expect(screen.getByText("go for a walk")).toBeInTheDocument();
// });

// test("should edit the title of a todo item", () => {
//   // Add a todo item to test the edit on it
//   const input = screen.getByPlaceholderText("add new todo");
//   const submitButton = screen.getByRole("button", { name: /Add Todo/i });
//   fireEvent.change(input, { target: { value: "Go for a walk" } });
//   fireEvent.click(submitButton);

//   const editButton = screen.getAllByTestId("edit-button")[0];
//   fireEvent.click(editButton);

//   expect(window.prompt).toHaveBeenCalledWith(
//     "edit todo's title",
//     "Go for a walk"
//   );

//   expect(screen.getByText("Go for a run")).toBeInTheDocument();
// });
