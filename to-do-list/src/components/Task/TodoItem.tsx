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
import { useActionState } from "react";
import { deleteTodoAction, updateTodoAction } from "@/actions/task";

interface TodoItemProps {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleUpdateTodo: (data: Todo) => void;
  token: string;
}

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  token,
}: TodoItemProps) => {
  let status: StatusTask = "NOT_FINISH";
  if (todo.statusTask === "NOT_FINISH") {
    status = "COMPLETED";
  }

  const boundUpdateAction = updateTodoAction.bind(null, { todo, token: token });
  const boundDeleteAction = deleteTodoAction.bind(null, {
    id: todo.id,
    token: token,
  });

  const [updateState, formUpdateAction] = useActionState(
    boundUpdateAction,
    undefined
  );

  const [deleteState, formDeleteAction] = useActionState(
    boundDeleteAction,
    undefined
  );

  const handleClick = (formData: FormData) => {
    const type = formData.get("action");
    console.log("🚀 ~ handleClick ~ type:", type);
    const updateTodo = { ...todo };
    if (type === "status") {
      updateTodo.statusTask = status;
    } else if (type === "myday") {
      updateTodo.isMyDay = !todo.isMyDay;
    } else if (type === "important") {
      updateTodo.isImportant = !todo.isImportant;
    }

    if (type === "delete") {
      handleDeleteTodo(todo.id);
      formDeleteAction(formData);
    } else {
      handleUpdateTodo(updateTodo);
      formUpdateAction(formData);
    }
  };

  if (!todo) {
    return null;
  }

  return (
    <>
      <Form action={handleClick}>
        <div className="tasks__item">
          <ButtonForm
            name="action"
            value="status"
            aria-label={
              todo.statusTask === "COMPLETED"
                ? "Task Completed"
                : "Task Not Completed"
            }
          >
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

          <button className="tasks__item-btn">
            <span
              className={todo.statusTask === "COMPLETED" ? "completed" : ""}
            >
              {todo.title}
            </span>
          </button>
          {updateState?.type === "error" ? (
            <div style={{ width: "20%" }}>
              <span className="error">{updateState?.error}</span>
            </div>
          ) : null}
          {deleteState?.type === "error" ? (
            <div style={{ width: "20%" }}>
              <span className="error">{deleteState?.error}</span>
            </div>
          ) : null}
          {todo.isImportant ? (
            <ButtonForm name="action" value="important">
              <StarFilled className="icon-small tasks__item-importanceCompleted" />
            </ButtonForm>
          ) : (
            <ButtonForm name="action" value="important">
              <Star className="icon-small tasks__item-importanceButton" />
            </ButtonForm>
          )}
          <PopUpMenu todo={todo} />
        </div>
      </Form>
    </>
  );
};
