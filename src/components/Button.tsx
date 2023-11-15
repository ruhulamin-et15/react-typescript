import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
