import { useState, useCallback, useMemo } from 'preact/hooks'
import clsx from "clsx";

import { useCounter } from "./hooks/useCounter";
import { useHighScore } from "./hooks/useHighScore";
import { usePickTextColor } from "./hooks/usePickTextColor";

import './index.css'
import { sleep } from './utils';
import { SourceCodeButton } from './components/SourceCodeButton';
import { DonateButton } from './components/DonateButton';

const randomColor = () => "#" + Math.floor(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0");

export function App() {

  const [ color, setColor ] = useState(randomColor());
  const [ showResults, setShowResults ] = useState(false);

  const { count, increment, reset }  = useCounter();

  const textColor = usePickTextColor(color);

  const highScore = useHighScore(count);
  
  const changeColor = useCallback(() => { 
    setColor(randomColor());
  }, [ setColor ]);

  const allColors = useMemo(() => ([color, randomColor(), randomColor(), ].sort(() => Math.random() - 0.5)), [ color ]);

  const onGuess = async (c: string) => {
    if (c === color) {
      increment();
    }
    else {
      reset();
    }

    setShowResults(true);
    await sleep(1200);
    setShowResults(false);

    changeColor();
  };

  return (
    <div
      style={{ backgroundColor: color }}
      class="flex flex-col w-screen h-screen transition-colors duration-200"
    >
      <div class="p-2 flex flex-row justify-end">
        <SourceCodeButton color={textColor} className="mx-2 w-10 h-10 md:w-12 md:h-12"/>
        <DonateButton color={textColor} className="mx-2 w-10 h-10 md:w-12 md:h-12"/>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="text-7xl font-bold font-lobster mb-2" style={{ color: textColor }}>ColoGuessr</h1>
      <div class="font-mono my-2" style={{ color: textColor }}>
        What color is the background?
      </div>
      <div class="flex flex-col md:flex-row my-2 w-1/2 md:w-fit">
        { allColors.map((c) => (
          <button
            class={clsx(
              "transition-colors duration-300 overflow-hidden",
              "my-2 md:my-0 shadow-lg mx-2 px-4 py-2 font-mono rounded-full",
              !showResults && "active:bg-black active:text-white md:hover:bg-black md:hover:text-white bg-white font-mono",
              showResults && (c === color ? "bg-green-500" : "bg-red-500"),
              showResults && "text-white"
            )}
            type="button"
            onClick={() => onGuess(c)}
            disabled={showResults}
          >
            { c.toUpperCase() }
          </button>
        ))}
      </div>
      <div class="text-center text-2xl font-lobster" style={{ color: textColor }}>
        Current Score: { count }
        <br/>
        High Score: { highScore }
      </div>
      </div>
    </div>
  )
}
