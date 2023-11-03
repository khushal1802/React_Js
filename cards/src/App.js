import "./App.css";
// import Search from "./Search";
import Card from "./Card";
import { Data } from "./Data";
import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Card data={Data} />
        </div>
        <Counter />
      </div>
      {/* <Search /> */}
    </>
  );
}

export default App;
