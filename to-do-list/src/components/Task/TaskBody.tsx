import { fetchTodos } from "@/lib/task";
import InputTaskAdd from "./InputTaskAdd";
import { TaskHeaderTypes } from "@/lib/constants";
import TaskList from "./TaskList";
import { Todo } from "@/lib/todo.interfaces";

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
    selectedTodos = todos.filter((todo) => todo.statusTask === "NOT_FINISH");
  } else {
    selectedTodos = todos;
  }

  return (
    <>
      <InputTaskAdd
        token={token}
        isImportant={section === "important"}
        isMyDay={section === "myday"}
      />
      <TaskList token={token} todos={selectedTodos} />
    </>
  );
}
export default TaskBody;
