import { useState } from "react";

const HookObject = () => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const changHandler = (e) => {
    setUserData({ firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setUserData({ ...userData, lastName: e.target.value });
  };

  return (
    <form>
      <input type="text" value={userData.firstName} onChange={changHandler} />
      <input type="text" value={userData.lastName} onChange={lastNameHandler} />
      <h1>my last name is {userData.lastName}</h1>
      <h1>my name is {userData.firstName}</h1>
    </form>
  );
};

export default HookObject;
