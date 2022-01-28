import React from "react";

import styles from "./Counter.module.css";
import useCounter from "./useCounter";

export function Counter() {
  const {
    count,
    onDecrementClick,
    onIncrementClick,
    incrementAmount,
    incrementValue,
    setIncrementAmount,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
  } = useCounter();

  return (
    <CounterPresentational
      {...{
        count,
        onDecrementClick,
        onIncrementClick,
        incrementAmount,
        incrementValue,
        setIncrementAmount,
        incrementByAmount,
        incrementAsync,
        incrementIfOdd,
      }}
    />
  );
}

export interface CounterPresentationalProps {
  count: number;
  onDecrementClick: () => void;
  onIncrementClick: () => void;
  incrementAmount: string;
  incrementValue: number;
  setIncrementAmount: (value: string) => void;
  incrementByAmount: (value: number) => void;
  incrementAsync: (value: number) => void;
  incrementIfOdd: (value: number) => void;
}
export const CounterPresentational: React.FC<CounterPresentationalProps> = ({
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
