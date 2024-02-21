"use client";
import React, { useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState(0);
  // console.log("Hello World!");
  return (
    <div>
      <h1>Hello NextJs</h1>
      <h2>Counter: {counter}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Increase</button>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease</button>
    </div>
  );
};

export default HomePage;