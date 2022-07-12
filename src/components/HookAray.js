import { useState } from "react";

const HookAray = () => {
  const [item, setitem] = useState([]);

  const addItemHandler = () => {
    setitem([
      ...item,
      { id: item.length, nmber: Math.floor(Math.random) * 10 },
    ]);
  };

  return (
    <div>
      <button onClick={addItemHandler}>click</button>
      {item.map((item) => {
        return <li key={item.id}>{item.nmber}</li>;
      })}
    </div>
  );
};

export default HookAray;
