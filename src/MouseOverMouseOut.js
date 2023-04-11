import React, { useState } from 'react';
import './MouseOverMouseOut.css';

export function MouseOverMouseOut() {
  const [data, setData] = useState([]);

  function handleOver() {
    const dt = new Date().toLocaleString();
    // console.log('in: '+dt)
    setData([...data, { time: dt, event: 'MouseOver' }]);
  }
  function handleOut() {
    const dt = new Date().toLocaleString();
    // console.log('out: ',dt)
    setData([...data, { time: dt, event: 'MouseOut' }]);
  }

  // console.log(data)

  return (
    <div>
      <h1 onMouseOver={handleOver} onMouseOut={handleOut}>
        This is heading 1. Hover here to see magic!
      </h1>
      <h2>This is heading 2.</h2>
      <div>This is a div.</div>

      <table border="1px" cellpadding='10px'>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>

        <tbody>
          {data.map((elem, ind) => {
            return (
            <tr key={ind}>
              <td>{elem.time}</td>
              <td>{elem.event}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}