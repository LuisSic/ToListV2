"use server";

import { createTodo, deleteTodo, updateTodo } from "@/lib/task";
import { DeleteTodo, EditTodo, PostTodo } from "@/lib/todo.interfaces";

export async function createTask(data: PostTodo) {
  await createTodo(data);
}

export async function updateTodoAction(data: EditTodo) {
  await updateTodo(data);
}

export async function deleteTodoAction(data: DeleteTodo) {
  await deleteTodo(data);
}
