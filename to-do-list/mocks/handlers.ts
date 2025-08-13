// __mocks__/msw/handlers.ts
import { http, HttpResponse, HttpResponseResolver, delay } from "msw";
import { TASK_API } from "@/lib/constants";
import { PostTodo, Todo, UpdateTodo } from "@/lib/todo.interfaces";

function handleCreateTodoRequest(
  resolver: HttpResponseResolver<never, PostTodo["todo"], Todo>
) {
  return http.post(`${TASK_API}/task`, resolver);
}

function handleUpdateTodoRequest(
  resolver: HttpResponseResolver<{ id: string }, UpdateTodo, Todo>
) {
  return http.put(`${TASK_API}/task/:id`, resolver);
}

export const handlers = [
  // — Create Task (POST /task) —
  handleCreateTodoRequest(async ({ request }) => {
    const todo = await request.json();
    return HttpResponse.json({
      id: "new-task-id",
      title: todo.title,
      isImportant: todo.isImportant,
      isMyDay: todo.isMyDay,
      statusTask: "NOT_FINISH",
      user: "user-id",
      createdAt: new Date().toISOString(),
    });
  }),
  handleUpdateTodoRequest(async ({ request }) => {
    await delay(150); // Simulate network delay
    const todo = await request.json();
    console.log("🚀 ~ handleUpdateTodoRequest:", todo);
    return HttpResponse.json({
      id: todo.id,
      title: "fake title",
      isImportant: todo.isImportant,
      isMyDay: todo.isMyDay,
      statusTask: todo.statusTask,
      user: "user-id",
      createdAt: new Date().toISOString(),
    });
  }),
];
