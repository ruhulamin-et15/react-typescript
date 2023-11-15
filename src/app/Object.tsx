import React from "react";
import UserObject from "../components/UserObject";

const user1 = {
  name: "Ruhul Amin",
  age: 27,
  isRegistered: true,
  lang: ["Bangla", "English"],
};
const user2 = {
  name: "Armina Sathy",
  age: 21,
  isRegistered: false,
  lang: ["Bangla", "English"],
};

function Object() {
  return (
    <div>
      <UserObject user={user1} />
      <UserObject user={user2} />
    </div>
  );
}

export default Object;
