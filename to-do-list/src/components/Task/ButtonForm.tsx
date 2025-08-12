"use client";

interface ButtonFormProps {
  children: React.ReactNode;
  name?: string;
  value?: string;
  "aria-label"?: string;
}

const ButtonForm = ({
  children,
  name,
  value,
  "aria-label": ariaLabel,
}: ButtonFormProps) => {
  return (
    <>
      <button
        aria-label={ariaLabel}
        type="submit"
        name={name}
        value={value}
        style={{
          all: "unset", // reset everything
          cursor: "pointer", // restore pointer so it feels clickable
        }}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonForm;
