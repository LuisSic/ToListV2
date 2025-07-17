import { Todo } from "@/lib/todo.interfaces";

import { TodoItem } from "./TodoItem";
interface Props {
  todos: Todo[];

  handleUpdateTodo: (data: Todo) => Promise<void>;
  handleDeleteTodo: (id: string) => Promise<void>;
}

const TaskList = ({ todos, handleUpdateTodo, handleDeleteTodo }: Props) => {
  const renderTasks = todos.map((task) => {
    return (
      <TodoItem
        key={task.id}
        todo={task}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
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
