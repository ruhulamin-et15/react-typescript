import React from "react";
import UserArrayObject from "../components/UserArrayObject";

const users = [
  {
    id: 1,
    name: "Ruhul Amin",
    email: "ruhul7574@gmail.com",
    age: 27,
  },
  {
    id: 2,
    name: "Armina Sathy",
    email: "sathy7574@gmail.com",
    age: 21,
  },
];

const ArrayObject = () => {
  return (
    <div style={{ border: "1px solid", margin: "0.5rem", padding: "1rem" }}>
      <UserArrayObject users={users} />
    </div>
  );
};

export default ArrayObject;
