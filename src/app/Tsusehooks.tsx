import React, { useState } from "react";

type User = {
  id: number;
  name: string;
};

const Tsusehooks = () => {
  const [user, setUser] = useState<User>({} as User);
  const handleAddUser = () => {
    console.log(user);
    setUser({ id: 1, name: "Ruhul Amin" });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <p>{user.name}</p>
    </div>
  );
};

export default Tsusehooks;
