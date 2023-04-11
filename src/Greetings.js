import React, { useState } from "react";

export function Greetings() {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const greetings = ["Hello", "Hi", "Hey there", "Greetings", "Good day"];

  const handleButtonClick = () => {
    // if(currentGreetingIndex===greetings.length-1){
    //   setCurrentGreetingIndex(0)
    // }else
    // {setCurrentGreetingIndex(currentGreetingIndex+1)}
    setCurrentGreetingIndex(
      currentGreetingIndex === greetings.length - 1
        ? 0
        : currentGreetingIndex + 1
    );
    
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Next Greeting</button>
      <h1>{greetings[currentGreetingIndex]}</h1>
    </div>
  );
}

