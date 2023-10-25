import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../../redux/actions/index.js";

const Counter: React.FC<{ count: number, addCount: Function}> = ({ count, addCount }) => {
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch();
    

    
    
  return (
    <div>
      <h1>*** Counter ***</h1>
      <h2>Count: {counter ? <p>{counter}</p> : "Esto va mal"}</h2>
      <button onClick={() => {dispatch(incrementCounter())}}>add</button>
    </div>
  );
};
export default Counter;
