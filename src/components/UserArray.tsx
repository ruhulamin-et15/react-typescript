import React from "react";

type PropsTypes = {
  name: string;
  age: number;
  isRegistered: boolean;
  lang: string[];
};
const UserArray = ({ name, age, isRegistered, lang }: PropsTypes) => {
  return (
    <div style={{ border: "1px solid", margin: "0.5rem", padding: "1rem" }}>
      <h2>{name}</h2>
      <p>{age} years old</p>
      {isRegistered ? <p>Registered</p> : <p>Not Registered</p>}
      <p>
        Speaks :
        {lang.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </div>
  );
};

export default UserArray;
