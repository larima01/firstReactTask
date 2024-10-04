import { useState } from "react";
import  '../App.css';

export default function Range(){
return(
   <div className="tas">
     <Counter />
   </div>
);
}

  function Counter (){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset(){
      setCount(0);
      setStep(1);
    }
    const date = new Date("9 22 2024");
    date.setDate(date.getDate() + count);
    return(
        <div>
             <div className="count">
              <input type="range" min='0' max='10' value={step} onChange={(e) => setStep(Number(e.target.value))} />
                <span>{step}</span>
                </div>
            <div className="count">
            <button onClick={() => setCount(c => c - step)}>-</button>
            <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
            <button onClick={() => setCount(c=> c + step)}>+</button>
        </div>
        <p style={{
          marginTop: 12,
        }}>
            <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
            <span>{date.toDateString()}</span>
        </p>
        {count !== 0 || step !== 1 ? (<div className="btn">
          <button onClick={handleReset}>Reset</button>
        </div>) : null}
        </div>
    );
  }