import React from "react";
import { useState } from "react";
import "./Hookcomponent.css"
var change=()=>{
    x!=x;
}

const HookComponent = () => {
//   const [count, setCount] = useState(0);
 const x=()=>{
    const [count, setCount] = useState(0);
 }

    return (
    // <div >
    //   <h1 className="count">Count: {count}</h1>
    //  <button onClick={() => setCount(count + 1)}>Increment</button>
    //  <button onClick={() => setCount(count - 1)}>Decrement</button>
    //  <button onClick={() => setCount(0)}>Reset</button>
    // </div>
    <button onClick={change}>Click Me</button>
  );
}
export default HookComponent;