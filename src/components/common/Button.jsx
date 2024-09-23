import React from "react";

const Button = ({
  text,
  children,
  disabled,
  onClick,
  customClass,
  outline,
}) => {
  return (
    <button
      className={` px-4 py-1 ${
        outline
          ? "text-[#353A47] bg-transparent border"
          : "bg-[#39B75D] text-white"
      } rounded-[3px] ${customClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children ? (
        <span className="flex gap-2 items-center">{children}</span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default Button;
