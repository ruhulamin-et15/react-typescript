import React from "react";
import ButtonStyle from "../components/ButtonStyle";

const btnStyles = { color: "red" };

const BtnStyle = () => {
  return (
    <div>
      <ButtonStyle btnStyle={btnStyles} />
    </div>
  );
};

export default BtnStyle;
