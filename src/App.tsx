import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Desglosenumber from './Brain';

function App() {
  const [numberElements, setNumberElements] = useState<number>(16850);
  const [exceptionNumberisnotreal] = [(e:number) => (e < 0 ? 'Number is not real' : '')] 
  
  const handleSequencyUpdate = function (e: React.FormEvent<HTMLInputElement>): void {
    setNumberElements(parseInt(e.currentTarget.value));

  }

  return (
    <div className="App" >
    <input value={numberElements} type="number" onChange={handleSequencyUpdate} />
    <div>Output: </div>
      {
        [Desglosenumber(numberElements).map((e,i) =>
          <div>{e} x {[2000,1000,500,200,100,50,25,10,5,1][i]} = {e * [2000,1000,500,200,100,50,25,10,5,1][i]}</div>
        ),
        <span className="error">{exceptionNumberisnotreal(numberElements)}</span>
        ]
      }
    </div>
  );
}

export default App;
