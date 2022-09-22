import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }

 // return <div onClick={increment}>{count}</div>;

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;

/*

function Counter() {
 // const countState = useState(0);
 // const count = countState[0];
 // const setCount = countState[1];

 const [count, setCount] = useState(0);

 // button setter function. When clicked it increments count by 1
  function increment() {
    setCount(count + 1);
    setCount(count + 1);
  // setCount((currentCount) => currentCount + 1);
  // setCount((currentCount) => currentCount + 1);


  }

  return <div onClick={increment}>{count}</div>;
}

*/
