"use server";

import { createTodo, deleteTodo, updateTodo } from "@/lib/task";
import {
  DeleteTodo,
  EditTodo,
  StatusTask,
  UpdateTodo,
} from "@/lib/todo.interfaces";

export async function createTask(
  extras: { isImportant: boolean; isMyDay: boolean; token: string }, // <-- extras first
  prevState: unknown,
  formData: FormData
) {
  const result = await createTodo({
    todo: {
      title: formData.get("title") as string,
      isImportant: extras.isImportant,
      isMyDay: extras.isMyDay,
    },
    token: extras.token,
  });

  return result;
}

export async function updateTodoAction(
  extras: EditTodo, // <-- extras first
  _prevState: unknown,
  formData: FormData
) {
  let status: StatusTask = "NOT_FINISH";
  if (extras.todo.statusTask === "NOT_FINISH") {
    status = "COMPLETED";
  }

  const type = formData.get("action");
  const updateTodoData: UpdateTodo = { ...extras.todo };
  if (type === "status") {
    updateTodoData.statusTask = status;
  } else if (type === "myday") {
    updateTodoData.isMyDay = !extras.todo.isMyDay;
  } else if (type === "important") {
    updateTodoData.isImportant = !extras.todo.isImportant;
  }
  const result = await updateTodo({
    todo: updateTodoData,
    token: extras.token,
  });

  return result;
}

export async function deleteTodoAction(
  extras: DeleteTodo, // <-- extras first
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prevState: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: FormData
) {
  const result = await deleteTodo(extras);
  return result;
}
