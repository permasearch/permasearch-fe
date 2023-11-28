import { ButtonType } from "./interface";

export const STYLE_GUIDE: ButtonType = {
  primary: {
    color: "bg-blue-500 hover:bg-blue-500 disabled:bg-gray-700 ",
    border: "",
    text: "text-gray-100",
  },
  secondary: {
    color: "bg-blue-100 hover:bg-blue-500 disabled:bg-gray-200",
    border:
      "border border-blue-300 hover:border-blue-300 disabled:border-gray-200",
    text: "text-blue-500 hover:text-gray-100 disabled:text-gray-700",
  },
  tertiary: {
    color: "bg-gray-100",
    border: "",
    text: "text-blue-500 hover:text-blue-500 disabled:text-gray-700",
  },
};
