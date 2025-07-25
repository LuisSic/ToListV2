"use client";
import InputTaskAdd from "./InputTaskAdd";
import { TaskHeaderTypes } from "@/lib/constants";
import TaskList from "./TaskList";
import { Todo } from "@/lib/todo.interfaces";
import { useOptimistic } from "react";
import { deleteTodoAction, updateTodoAction } from "@/actions/task";
interface Params {
  todos: Todo[];
  section: TaskHeaderTypes;
  token: string;
}
type Actions = { type: "delete"; id: string } | { type: "update"; todo: Todo };

function TaskBodySection({ token, section, todos }: Params) {
  const [optimisticTodos, actionsTodos] = useOptimistic<Todo[], Actions>(
    todos,
    (prevState, action) => {
      switch (action.type) {
        case "delete":
          return prevState.filter((todo) => todo.id !== action.id);
        case "update":
          return prevState.map((todo) =>
            todo.id === action.todo.id ? action.todo : todo
          );
        default:
          return prevState;
      }
    }
  );

  async function handleUpdateTodo(todo: Todo) {
    actionsTodos({ type: "update", todo });

    await updateTodoAction({
      todo,
      token,
    });
  }

  async function handleDeleteTodo(id: string) {
    actionsTodos({ type: "delete", id });

    await deleteTodoAction({
      id,
      token,
    });
  }

  return (
    <>
      <InputTaskAdd
        token={token}
        isImportant={section === "important"}
        isMyDay={section === "myday"}
      />
      <TaskList
        todos={optimisticTodos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
export default TaskBodySection;
