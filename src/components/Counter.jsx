import { useState } from "react";

export const Counter = ({ initCount }) => {
  const [count, setCount] = useState(initCount);
  return (
    <>
      <h2>Counter</h2>
      <h3 className={count % 2 === 0 ? "even-class" : "odd-class"}>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </>
  );
};
