"use client";
import Circle from "../../../public/task/ellipse-outline.svg";
import Check from "../../../public/task/checkmark-outline.svg";
import Star from "../../../public/task/star-outline.svg";
import CheckFill from "../../../public/task/checkmark-circle-fill.svg";
import StarFilled from "../../../public/task/star-fillled.svg";
import PopUpMenu from "./PopUpMenu";
import { StatusTask, Todo } from "@/lib/todo.interfaces";
import { deleteTodo, updateTodo } from "@/lib/task";

interface TodoItemProps {
  todo: Todo;
  token: string;
}

export const TodoItem = ({ todo, token }: TodoItemProps) => {
  console.log("🚀 ~ TodoItem ~ todo:", todo);
  const handleClick = async () => {
    let status: StatusTask = "NOT_FINISH";
    if (todo.statusTask === "NOT_FINISH") {
      status = "COMPLETED";
    }

    const result = await updateTodo({
      todo: {
        statusTask: status,
        isMyDay: todo.isMyDay,
        isImportant: todo.isImportant,
        id: todo.id,
      },
      token,
    });
    console.log("🚀 ~ handleClick ~ result:", result);
  };

  const handleClickStar = async () => {
    const result = await updateTodo({
      todo: {
        statusTask: todo.statusTask,
        isMyDay: todo.isMyDay,
        isImportant: !todo.isImportant,
        id: todo.id,
      },
      token,
    });
    console.log("🚀 ~ handleClickStar ~ result:", result);
  };

  const handleClickMyDay = async () => {
    const result = await updateTodo({
      todo: {
        statusTask: todo.statusTask,
        isMyDay: !todo.isMyDay,
        isImportant: todo.isImportant,
        id: todo.id,
      },
      token,
    });
    console.log("🚀 ~ handleClickMyDay ~ result:", result);
  };

  const handleDeleteTask = async () => {
    const result = await deleteTodo({
      id: todo.id,
      token,
    });
    console.log("🚀 ~ handleDeleteTask ~ result:", result);
  };

  if (!todo) {
    return null;
  }

  return (
    <>
      <div className="tasks__item">
        <div className="tasks__item-icons" onClick={handleClick}>
          {todo.statusTask === "NOT_FINISH" ? (
            <>
              <Circle className="icon-small icon icon--cirleOutline" />
              <Check className="icon icon--circleCheck" />
            </>
          ) : (
            <CheckFill className="icon-small icon icon--circleCompleted" />
          )}
        </div>
        <button className="tasks__item-btn">
          <span className={todo.statusTask === "COMPLETED" ? "completed" : ""}>
            {todo.title}
          </span>
        </button>
        {todo.isImportant ? (
          <StarFilled
            className="icon-small tasks__item-importanceCompleted"
            onClick={() => handleClickStar()}
          />
        ) : (
          <Star
            className="icon-small tasks__item-importanceButton"
            onClick={() => handleClickStar()}
          />
        )}
        <PopUpMenu
          todo={todo}
          callbackCompleted={() => handleClick()}
          callbackImportant={() => handleClickStar()}
          callbackMyDay={() => handleClickMyDay()}
          callbackDelete={() => handleDeleteTask()}
        />
      </div>
    </>
  );
};
