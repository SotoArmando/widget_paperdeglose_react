import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Desglosenumber from './Brain';

function App() {
  const [numberElements, setNumberElements] = useState<number>(16850);
  const [exceptionNumberisnotreal] = [(e:number) => (e < 0 ? 'Number is not real' : '')] 
  const [randomOutput, setOuput] = useState<Array<number>>(Desglosenumber(numberElements));
  
  const handleSequencyUpdate = function (e: React.FormEvent<HTMLInputElement>): void {
    setNumberElements(parseInt(e.currentTarget.value));
  }

  return (
    <div className="App" >
    <input value={numberElements} type="number" onChange={handleSequencyUpdate} />
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
