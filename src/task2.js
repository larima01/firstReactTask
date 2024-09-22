import { useState } from "react";
import  './App.css';

export default function Task(){
return(
   <div className="tas">
     <Counter />
   </div>
);
}

  function Counter (){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const date = new Date("9 22 2024");
    date.setDate(date.getDate() + count);
    return(
        <div>
             <div className="count">
                <button onClick={() => setStep(c => c - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep(c=> c + 1)}>+</button>
                </div>
            <div className="count">
            <button onClick={() => setCount(c => c - step)}>-</button>
            <span>count: {count}</span>
            <button onClick={() => setCount(c=> c + step)}>+</button>
        </div>
        <p>
            <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
            <span>{date.toDateString()}</span>
        </p>
        </div>
    );
  }