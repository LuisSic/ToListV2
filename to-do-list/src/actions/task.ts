"use server";

import { createTodo } from "@/lib/task";
import { PostTodo } from "@/lib/todo.interfaces";

export async function createTask(data: PostTodo) {
  console.log("🚀 ~ createTask ~ data:", data);
  if (!data.todo.title) {
    throw new Error("Title is required");
  }

  await createTodo(data);
}
