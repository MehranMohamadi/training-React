import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount(count + 1);
  };
  const addtwoHandler = () => {
    setCount(count + 2);
  };
  const addtenHandler = () => {
    for (let i = 0; i <= 10; i++) {
      setCount((prevState) => {
        return prevState + 1;
      });
    }
  };

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={addOneHandler}>add one</button>
      <button onClick={addtwoHandler}>add two</button>
      <button onClick={addtenHandler}>add ten</button>
    </div>
  );
};

export default HookCounter;
