import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Randomnnumbers from './Brain';

function App() {
  const [numberElements, setNumberElements] = useState<number>(10);
  const [exceptionNumberisnotreal] = [(e:number) => (e < 0 ? 'Number is not real' : '')] 
  const [randomOutput, setOuput] = useState<Array<number>>(Randomnnumbers(numberElements));
  const handleSequencyUpdate = function (e: React.FormEvent<HTMLInputElement>): void {
    setNumberElements(parseInt(e.currentTarget.value));
  }
  const regenerate = function(): void {
    setOuput(Randomnnumbers(numberElements))
  }
  return (
    <div className="App" >
    <input value={numberElements} type="number" onChange={handleSequencyUpdate} />
    <button onClick={regenerate}>Go</button>
    <div>Output: </div>
      {
        [randomOutput.map(e =>
          <div>{e}</div>
        ),
        <span className="error">{exceptionNumberisnotreal(numberElements)}</span>
        ]
      }
    </div>
  );
}

export default App;
