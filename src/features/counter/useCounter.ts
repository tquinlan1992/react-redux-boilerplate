import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

function useCounter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return {
    count,
    onDecrementClick: () => dispatch(decrement()),
    onIncrementClick: () => dispatch(increment()),
    incrementAmount: incrementAmount,
    incrementValue: incrementValue,
    setIncrementAmount: setIncrementAmount,
    incrementByAmount: () => dispatch(incrementByAmount(incrementValue)),
    incrementAsync: () => dispatch(incrementAsync(incrementValue)),
    incrementIfOdd: () => dispatch(incrementIfOdd(incrementValue)),
  };
}

export default useCounter;
