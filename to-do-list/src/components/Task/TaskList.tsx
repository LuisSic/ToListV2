import { Todo } from "@/lib/todo.interfaces";
import { TodoItem } from "./TodoItem";
interface Props {
  todos: Todo[];
  token: string;
}

const TaskList = ({ todos, token }: Props) => {
  const renderTasks = todos.map((task) => {
    return <TodoItem key={task.id} todo={task} token={token} />;
  });
  return (
    <>
      <div className="tasks">{renderTasks}</div>
    </>
  );
};

export default TaskList;
