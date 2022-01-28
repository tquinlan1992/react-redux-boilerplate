import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <CounterPresentational
      count={count}
      onDecrementClick={() => dispatch(decrement())}
      onIncrementClick={() => dispatch(increment())}
      incrementAmount={incrementAmount}
      incrementValue={incrementValue}
      setIncrementAmount={setIncrementAmount}
      incrementByAmount={() => dispatch(incrementByAmount(incrementValue))}
      incrementAsync={() => dispatch(incrementAsync(incrementValue))}
      incrementIfOdd={() => dispatch(incrementIfOdd(incrementValue))}
    />
  );
}

export const CounterPresentational: React.VFC<{
  count: number;
  onDecrementClick: () => void;
  onIncrementClick: () => void;
  incrementAmount: string;
  incrementValue: number;
  setIncrementAmount: (value: string) => void;
  incrementByAmount: (value: number) => void;
  incrementAsync: (value: number) => void;
  incrementIfOdd: (value: number) => void;
}> = ({
  onDecrementClick,
  onIncrementClick,
  count,
  incrementAmount,
  setIncrementAmount,
  incrementByAmount,
  incrementValue,
  incrementAsync,
  incrementIfOdd,
}) => (
  <div>
    <div className={styles.row}>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={onDecrementClick}
      >
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={onIncrementClick}
      >
        +
      </button>
    </div>
    <div className={styles.row}>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => incrementByAmount(incrementValue)}
      >
        Add Amount
      </button>
      <button
        className={styles.asyncButton}
        onClick={() => incrementAsync(incrementValue)}
      >
        Add Async
      </button>
      <button
        className={styles.button}
        onClick={() => incrementIfOdd(incrementValue)}
      >
        Add If Odd
      </button>
    </div>
  </div>
);
