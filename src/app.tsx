import { useState, useCallback, useMemo } from 'preact/hooks'
import { useCounter } from "./hooks/useCounter";
import { useHighScore } from "./hooks/useHighScore";
import { usePickTextColor } from "./hooks/usePickTextColor";

import './index.css'

const randomColor = () => "#" + Math.floor(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0");

export function App() {

  const [ color, setColor ] = useState(randomColor());

  const { count, increment, reset }  = useCounter();

  const textColor = usePickTextColor(color);

  const highScore = useHighScore(count);
  
  const changeColor = useCallback(() => { 
    setColor(randomColor());
  }, [ setColor ]);

  const allColors = useMemo(() => ([color, randomColor(), randomColor(), ].sort(() => Math.random() - 0.5)), [ color ]);

  const onGuess = (c: string) => {
    if (c === color) {
      increment();
    }
    else reset();

    changeColor();
  };

  return (
    <div
      style={{ backgroundColor: color }}
      class="w-screen h-screen flex flex-col items-center justify-center"
    >
      <h1 class="text-7xl font-bold font-lobster mb-2 transition-all duration-100" style={{ color: textColor }}>ColoGuessr</h1>
      <div class="font-mono my-2" style={{ color: textColor }}>
        What color is the background?
      </div>
      <div class="flex flex-col md:flex-row my-2 w-1/2 md:w-fit">
        { allColors.map((c) => (
          <button
            class="my-2 md:my-0 hover:bg-black hover:text-white shadow-lg bg-white mx-2 border-gray-600 rounded-full px-4 py-2 transition-all duration-200 font-mono"
            type="button"
            onClick={() => onGuess(c)}
          >
            { c.toUpperCase() }
          </button>
        ))}
      </div>
      <div class="text-center text-2xl font-lobster transition-all duration-100" style={{ color: textColor }}>
        Current Score: { count }
        <br/>
        High Score: { highScore }
      </div>
    </div>
  )
}
