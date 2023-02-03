import React from "react";
import { useState } from "react";
import './counter.css';

export function Counter(){
    const [result, setResult] = useState(0)
    const suma = () =>{
        setResult(result + 1)

    }
    const rest = () =>{
        setResult(result - 1)
    }

    const reset = () =>{
        setResult(0)
    }

    return (
        <div >
            <h1 className="h1">COUNTER</h1>
            <div className="result">{result}</div>
               <div className="contenedor">
                <button onClick={rest} className="button1">➖</button> 
                <button onClick={reset} className="button2">Reset</button> 
                <button onClick={suma} className="button3">➕</button> 
               </div>
            
            
        </div>
         
      );


}