import React from "react";
import { ButtonProps } from "./interface";
import { STYLE_GUIDE } from "./Button.presets";

// import SpinnerIcon from "@icons/ic_spinner.svg";
export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  type,
  thin,
  padding,
  disabled,
  className,
  loading,
  onClick,
  buttonType,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={buttonType}
      className={`${className} ${STYLE_GUIDE[type].color} ${
        STYLE_GUIDE[type].text
      } ${STYLE_GUIDE[type].border} flex items-center justify-center ${
        children ? "gap-2 rounded-full" : "rounded-full"
      } ${
        padding
          ? padding
          : `${children ? "px-6" : "px-3"} ${thin ? "py-1.5" : "py-3"}`
      } transition duration-200 `}
      {...props}
    >
      {loading ? (
        <>
          {/* <SpinnerIcon className="animate-spin" /> */}
          <p>Loading...</p>
        </>
      ) : (
        <>
          {leftIcon && leftIcon}
          <p>{children}</p>
          {rightIcon && rightIcon}
        </>
      )}
    </button>
  );
};
