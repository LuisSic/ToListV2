"use server";

import { createTodo } from "@/lib/task";
import { PostTodo } from "@/lib/todo.interfaces";

export async function createTask(data: PostTodo) {
  if (!data.todo.title) {
    throw new Error("Title is required");
  }

  await createTodo(data);
}
