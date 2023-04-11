import React, { useState } from "react";

export function Table() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);

  const handleRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 100));
    console.log(number);
  };

  const handleGenerateTable = () => {
    const datas = [];
    for (let i = 1; i <= 10; i++) {
      datas.push(
        <tr key={i}>
          <td>{number * i}</td>
        </tr>
      );
    }
    setData(datas);
  };

  return (
    <div>
      <p>{number} </p>
      <button onClick={handleRandomNumber}> Random Number</button>
      <hr />
      <button onClick={handleGenerateTable}>Generate Table</button>
      <p>{data}</p>
      
    </div>
  );
}