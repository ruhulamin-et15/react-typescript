import React, { ChangeEvent, MouseEvent, useState } from "react";

const NewUser = () => {
  const [userName, setUserName] = useState("");
  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(userName);
  };
  return (
    <div>
      <h2>Create new user</h2>
      <input
        type="text"
        placeholder="Enter new user name"
        value={userName}
        onChange={handleUserNameChange}
      />
      <button onClick={handleClick}>Show Name</button>
    </div>
  );
};

export default NewUser;
