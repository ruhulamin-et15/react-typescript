import React from 'react';

type PropsTypes = {
    user: {
       name: string;
       age: number;
       isRegistered: boolean;
       lang: string[];
    };
};

const UserObject = ({ user }: PropsTypes) => {
  const {name, age, isRegistered, lang} = user;
  return (
    <div style={{border: "1px solid", margin: "0.5rem", padding: "1rem"}}>
        <h2>{name}</h2>
        <p>{age}</p>
        {isRegistered? <p>Registered User</p> : <p>Note Registered User</p> }
        <p>
            Speaks:
            {lang.map((language, index) => {
                return <span key={index}>{language} </span>
            })}
        </p>
    </div>
  )
}

export default UserObject;