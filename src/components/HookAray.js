import { useState } from "react";
import styles from "./product.module.css";
const HookAray = () => {
  const [item, setitem] = useState([]);

  const addItemHandler = () => {
    setitem([
      ...item,
      { id: item.length, number: Math.floor(Math.random() * 10) },
    ]);
  };

  return (
    <div className={styles.product}>
      <button onClick={addItemHandler}>click</button>
      {item.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HookAray;
