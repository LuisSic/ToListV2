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
