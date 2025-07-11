"use client";
import React, { useState } from "react";
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
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <>
      <div className={`baseAdd baseAdd-${inputFocus ? "focus" : ""}`}>
        {inputFocus ? (
          <Circle className="icon-small baseAdd__icon" />
        ) : (
          <Add className="icon-small baseAdd__icon" />
        )}
        <Form
          action={createTask.bind(null, {
            todo: { title: inputValue, isImportant, isMyDay },
            token: token,
          })}
        >
          <input
            value={inputValue}
            className="baseAdd__input"
            type="text"
            placeholder="Add a task"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.currentTarget.value)
            }
            onFocus={() => setInputFocus((prevState) => !prevState)}
            onBlur={() => setInputFocus((prevState) => !prevState)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                e.preventDefault();
                // Add your custom logic here
                if (inputValue.trim()) {
                  // The form will automatically submit due to the Form component
                  // You can add additional logic here if needed
                  console.log("Task submitted:", inputValue);
                  setInputValue(""); // Clear the input after submission
                }
              }
            }}
          />
        </Form>
      </div>
    </>
  );
};

export default InputTaskAdd;
