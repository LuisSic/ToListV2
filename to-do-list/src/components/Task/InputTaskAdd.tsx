"use client";
import React, { useState, useRef } from "react";
import Form from "next/form";
import Add from "../../../public/features/add-outline.svg";
import Circle from "../../../public/task/ellipse-outline.svg";
import { createTask } from "@/actions/task";

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

  const [inputFocus, setInputFocus] = useState(false);

  async function handleSubmit(formData: FormData) {
    if (!formData.get("title")) {
      return;
    }

    const newTodo = {
      title: formData.get("title") as string,
      isImportant,
      isMyDay,
    };
    await createTask({
      todo: newTodo,
      token,
    });
    formRef.current?.reset();
  }

  return (
    <>
      <div className={`baseAdd baseAdd-${inputFocus ? "focus" : ""}`}>
        {inputFocus ? (
          <Circle className="icon-small baseAdd__icon" />
        ) : (
          <Add className="icon-small baseAdd__icon" />
        )}
        <Form action={handleSubmit} ref={formRef}>
          <input
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
