import { Todo } from "@/lib/todo.interfaces";

import { TodoItem } from "./TodoItem";
interface Props {
  todos: Todo[];
  token: string;
  handleUpdateTodo: (data: Todo) => void;
  handleDeleteTodo: (id: string) => void;
}

const TaskList = ({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  token,
}: Props) => {
  const renderTasks = todos.map((task) => {
    return (
      <TodoItem
        key={task.id}
        todo={task}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        token={token}
      />
    );
  });
  return (
    <>
      <div className="tasks">{renderTasks}</div>
    </>
  );
};

export default TaskList;
