export type StatusTask = "COMPLETED" | "DELETED" | "NOT_FINISH";

export interface Todo {
  id: string;
  title: string;
  isImportant: boolean;
  isMyDay: boolean;
  statusTask: StatusTask;
  createdAt: string;
  user: string;
}

export interface PostTodo {
  todo: Pick<Todo, "title" | "isImportant" | "isMyDay">;
  token: string;
}

export interface EditTodo {
  todo: Pick<Todo, "id" | "statusTask" | "isImportant" | "isMyDay">;
  token: string;
}

export interface DeleteTodo {
  id: string;
  token: string;
}

export type ResultApi<T> =
  | { type: "success"; data: T }
  | { type: "error"; error: Error };
