import React from "react";
import { Data } from "./Data";

function Search() {
  return (
    <div>
      {Data.filter((p) => p.status === "pending").map((e, index) => {
        return (
          <div key={index}>
            <p>{e.foodname}</p>
            <p>{e.price}</p>
            <p>{e.quantity}</p>
            <p>{e.description}</p>
            <p>{e.status}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
