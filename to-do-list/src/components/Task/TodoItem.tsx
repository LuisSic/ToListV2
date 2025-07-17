"use client";
import Circle from "../../../public/task/ellipse-outline.svg";
import Check from "../../../public/task/checkmark-outline.svg";
import Star from "../../../public/task/star-outline.svg";
import CheckFill from "../../../public/task/checkmark-circle-fill.svg";
import StarFilled from "../../../public/task/star-fillled.svg";
import PopUpMenu from "./PopUpMenu";
import { StatusTask, Todo } from "@/lib/todo.interfaces";

import Form from "next/form";
import ButtonForm from "./ButtonForm";

interface TodoItemProps {
  todo: Todo;
  handleDeleteTodo: (id: string) => Promise<void>;
  handleUpdateTodo: (data: Todo) => Promise<void>;
}

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
}: TodoItemProps) => {
  let status: StatusTask = "NOT_FINISH";
  if (todo.statusTask === "NOT_FINISH") {
    status = "COMPLETED";
  }

  const handleClick = async (
    type: "status" | "myday" | "important" | "delete"
  ) => {
    const updateTodo = { ...todo };
    if (type === "status") {
      updateTodo.statusTask = status;
    } else if (type === "myday") {
      updateTodo.isMyDay = !todo.isMyDay;
    } else if (type === "important") {
      updateTodo.isImportant = !todo.isImportant;
    }

    if (type === "delete") {
      await handleDeleteTodo(todo.id);
    } else {
      await handleUpdateTodo(updateTodo);
    }
  };

  if (!todo) {
    return null;
  }

  return (
    <>
      <div className="tasks__item">
        <Form
          action={handleUpdateTodo.bind(null, {
            ...todo,
            statusTask: status,
            isMyDay: todo.isMyDay,
            isImportant: todo.isImportant,
            id: todo.id,
          })}
        >
          <ButtonForm>
            <div className="tasks__item-icons">
              {todo.statusTask === "NOT_FINISH" ? (
                <>
                  <Circle className="icon-small icon icon--cirleOutline" />
                  <Check className="icon icon--circleCheck" />
                </>
              ) : (
                <CheckFill className="icon-small icon icon--circleCompleted" />
              )}
            </div>
          </ButtonForm>
        </Form>

        <button className="tasks__item-btn">
          <span className={todo.statusTask === "COMPLETED" ? "completed" : ""}>
            {todo.title}
          </span>
        </button>
        {todo.isImportant ? (
          <Form
            action={handleUpdateTodo.bind(null, {
              ...todo,
              statusTask: todo.statusTask,
              isMyDay: todo.isMyDay,
              isImportant: !todo.isImportant,
              id: todo.id,
            })}
          >
            <ButtonForm>
              <StarFilled className="icon-small tasks__item-importanceCompleted" />
            </ButtonForm>
          </Form>
        ) : (
          <Form
            action={handleUpdateTodo.bind(null, {
              ...todo,
              statusTask: todo.statusTask,
              isMyDay: todo.isMyDay,
              isImportant: !todo.isImportant,
              id: todo.id,
            })}
          >
            <ButtonForm>
              <Star className="icon-small tasks__item-importanceButton" />
            </ButtonForm>
          </Form>
        )}
        <PopUpMenu todo={todo} callbackUpdate={handleClick} />
      </div>
    </>
  );
};
