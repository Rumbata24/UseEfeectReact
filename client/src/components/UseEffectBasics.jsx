// UseEffect = tells React DO SOME CODE WHEN
//           - This component re-render
//           - This component mounts
//           - The state of a value

// 1. useEffect(()=> {})  // Runs after every re-render
// 1. useEffect(()=> {}, [])  // Runs only on mount
// 1. useEffect(()=> {}, [value])  // Runs on mount + when value changes

import { useEffect, useState } from "react";
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    return () => {
      // Some cleanup code
    };
  }, [count, color]);

  const addCount = () => {
    setCount((c) => c + 1);
  };
  const subCount = () => {
    setCount((c) => c - 1);
  };
  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  return (
    <>
      <h1 style={{ color: color }}>Count: {count}</h1>
      <button onClick={addCount}>Add {count}</button>
      <button onClick={subCount}>Subtract </button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default UseEffectBasics;
