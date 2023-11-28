import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  type: "primary" | "secondary" | "tertiary";
  thin?: boolean;
  padding?: string;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  rightIcon?: any;
  leftIcon?: any;
  buttonType?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonType {
  [key: string]: ButtonStyle;
}

interface ButtonStyle {
  color: string;
  border: string;
  text: string;
}
