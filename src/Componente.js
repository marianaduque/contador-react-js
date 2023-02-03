import { useState } from "react";

export function MyComponent({titulo}){
    const status  = 'Activo' 
    const [info, setInfo] = useState(20)
    const change = () =>{
        setInfo(info + 1)

    }
    return (
         <h1 onClick={change}>{titulo} {status} {info}</h1> 
      );

}
