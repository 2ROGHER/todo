import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../../redux/actions/index";

const Counter = ({ counter, incrementAction }) => {
  // const { countState} = useSelector((state) => state);
  // const dispatch = useDispatch();

  const increment = () => {
    console.log("incrementando el contador");
    // dispatch(incrementCounter(1));
    incrementAction(1);
    //
  };

  const decrement = () => {
    // dispatch(incrementCounter(-1))
    // incrementAction(-1);
    console.log("this is the functions");
    incrementAction(-1);
  };

  return (
    <div>
      <h1>*** Counter ***</h1>
      <h2>{counter.count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default Counter;
