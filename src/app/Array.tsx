import React from "react";
import UserArray from "../components/UserArray";

const Array = () => {
  return (
    <div>
      <UserArray
        name="Ruhul Amin"
        age={27}
        isRegistered={true}
        lang={["Bangla", "English"]}
      />
      <UserArray
        name="Armina Sathy"
        age={21}
        isRegistered={true}
        lang={["Bangla", "English"]}
      />
    </div>
  );
};

export default Array;
