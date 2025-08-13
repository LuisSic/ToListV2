"use client";
import React, { useState, useRef } from "react";
import Form from "next/form";
import Add from "../../../public/features/add-outline.svg";
import Circle from "../../../public/task/ellipse-outline.svg";
import { createTask } from "@/actions/task";
import { useActionState } from "react";
interface InputTaskAddProps {
  isImportant?: boolean;
  isMyDay?: boolean;
  token: string;
}

const InputTaskAdd = ({
  isImportant = false,
  isMyDay = false,
  token,
}: InputTaskAddProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const boundAction = createTask.bind(null, { isImportant, isMyDay, token });

  const [, formAction] = useActionState(boundAction, undefined);

  const [inputFocus, setInputFocus] = useState(false);

  return (
    <>
      <div className={`baseAdd baseAdd-${inputFocus ? "focus" : ""}`}>
        {inputFocus ? (
          <Circle className="icon-small baseAdd__icon" />
        ) : (
          <Add className="icon-small baseAdd__icon" />
        )}
        <Form action={formAction} ref={formRef}>
          <input
            aria-label="AddTask"
            className="baseAdd__input"
            type="text"
            placeholder="Add a task"
            onFocus={() => setInputFocus((prevState) => !prevState)}
            onBlur={() => setInputFocus((prevState) => !prevState)}
            name="title"
          />
        </Form>
      </div>
    </>
  );
};

export default InputTaskAdd;
