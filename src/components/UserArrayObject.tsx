import React from "react";

type PropsTypes = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};
const UserArrayObject = ({ users }: PropsTypes) => {
  return (
    <div>
      {users.map((user) => {
        const { id, name, email, age } = user;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>{age} years old</p>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserArrayObject;
