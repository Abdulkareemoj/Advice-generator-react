import { useState, useEffect } from "react";
import buttm from "./images/pattern-divider-mobile.svg";
import buttd from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
function App() {
  const[text, setText] = useState([])

  const fetchMessageAdvice = async()=>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data =await res.json()
setText(data)
}
 useEffect(()=>{

 
 fetchMessageAdvice()
},[])
  return (<div className="container">
    <h1>Advice # {text?.slip?.id}</h1>
    <p>{text?.slip?.advice}</p>
    <picture>
    <source media="(min-width:768px)" srcSet= {buttd}/>
   <img src={buttm} alt="" />
    </picture>
   
   
   
   <div>
   <button onClick={fetchMessageAdvice}>
   <img src={dice} alt="" />
 </button>
   </div>
   </div>
  );
}
export default App;
