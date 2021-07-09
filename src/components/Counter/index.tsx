import React, { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="p-3">
      <p>Counter: {counter}</p>
      <button className="btn btn-primary mr-2" onClick={() => setCounter(counter + 1)}>Increase (+1)</button>
      <button className="btn btn-warning" onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}
