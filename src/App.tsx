import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Desglosenumber from './Brain';

function App() {
  const [amount, setAmount] = useState<number>(17984);
  const [exceptionNumberisnotreal] = [(e:number) => (e < 0 ? 'Number is not real' : '')] 
  
  const handleSequencyUpdate = function (e: React.FormEvent<HTMLInputElement>): void {
    setAmount(parseInt(e.currentTarget.value));

  }

  return (
    <div className="App" >
    <input value={amount} type="number" onChange={handleSequencyUpdate} />
    <div>Output: </div>
      {
        [Desglosenumber(amount).map((e,i) =>
          <div>{e} x {[2000,1000,500,200,100,50,25,10,5,1][i]} = {e * [2000,1000,500,200,100,50,25,10,5,1][i]}</div>
        ),
        <span className="error">{exceptionNumberisnotreal(amount)}</span>
        ]
      }
    </div>
  );
}

export default App;
