import React, { FC, ButtonHTMLAttributes } from "react";

// Define the component with ButtonHTMLAttributes
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      className={`btn bg-gradient-to-r from-solana-purple to-solana-green text-white ${props.className}`}
    >
      {props.children || "Button"}
    </button>
  );
};

export default Button;
