import { useState, useCallback } from "preact/hooks";

export function useCounter(initialCount: number = 0) {
  const [ count, setCount ] = useState(initialCount);

  const increment = useCallback(() => setCount(old => old + 1), [ setCount ]);
  const decrement = useCallback(() => setCount(old => old - 1), [ setCount ]);
  const reset = useCallback(() => setCount(0), [ setCount ]);
  
  return {
    count,
    increment,
    decrement,
    reset,
  };
}

