import { fetchTodos } from "@/lib/task";

import { TaskHeaderTypes } from "@/lib/constants";

import { Todo } from "@/lib/todo.interfaces";

import TaskBodySection from "./TaskBodySection";
interface Params {
  token: string;
  section: TaskHeaderTypes;
}

async function TaskBody({ token, section }: Params) {
  const response = await fetchTodos({
    token: token,
  });

  if (response.type === "error") {
    throw response.error;
  }
  const todos = response.data;

  let selectedTodos: Todo[] = [];

  if (section === "myday") {
    selectedTodos = todos.filter((todo) => todo.isMyDay);
  } else if (section === "important") {
    selectedTodos = todos.filter((todo) => todo.isImportant);
  } else if (section === "planned") {
    selectedTodos = [];
  } else if (section === "assigned_to_me") {
    selectedTodos = [];
  } else if (section === "inbox") {
    selectedTodos = todos;
  } else {
    selectedTodos = todos;
  }

  return (
    <>
      <TaskBodySection token={token} section={section} todos={selectedTodos} />
    </>
  );
}
export default TaskBody;
