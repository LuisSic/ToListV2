"use client";

interface ButtonFormProps {
  children: React.ReactNode;
}

const ButtonForm = ({ children }: ButtonFormProps) => {
  return (
    <>
      <button
        type="submit"
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
