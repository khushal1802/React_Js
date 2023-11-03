import React from 'react'
import { useState } from 'react';

function Counter() {
    const [n, setData] = useState(0);

     return (
       <>
         <h1 style={{ color: "whitesmoke" }}>{n}</h1>
         <button
           onClick={() => setData(n + 1)}
           style={{
             Width: "25px",
             color: "whitesmoke",
             backgroundColor: "red",
             border: "none",
           }}
         >
           Increment
         </button>
         <button
           onClick={() => setData(n - 1)}
           style={{
             Width: "25px",
             color: "whitesmoke",
             backgroundColor: "red",
             border: "none",
             marginLeft: "20px",
           }}
         >
           Decrement
         </button>

         <button
           onClick={() => setData(0)}
           style={{
             Width: "25px",
             color: "whitesmoke",
             backgroundColor: "red",
             border: "none",
             marginLeft: "20px",
           }}
         >
           Reset
         </button>
       </>
     );
}

export default Counter;