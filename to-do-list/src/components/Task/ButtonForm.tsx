"use client";

interface ButtonFormProps {
  children: React.ReactNode;
  name?: string;
  value?: string;
}

const ButtonForm = ({ children, name, value }: ButtonFormProps) => {
  return (
    <>
      <button
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
