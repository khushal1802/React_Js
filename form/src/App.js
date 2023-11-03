import './App.css';
import { useState } from "react";

function App() {
  const [value, setvalue] = useState({});

  function handle(e) {
    setvalue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>{}</h1>
      first name :~
      <input type="text" className="m-2" name="fname" onChange={handle} />
      <br />
      last name :~
      <input type="text" className="m-2" name="lname" onChange={handle} />
      <br />
      email:~
      <input type="email" className="m-2" name="email" onChange={handle} />
      <br />
      phone:~
      <input type="tel" className="m-2" name="phone" onChange={handle} />
      <br />
      password:~
      <input
        type="password"
        className="m-2"
        name="password"
        onChange={handle}
      />
      <br />
      address:~
      <input type="text" className="m-2" name="address" onChange={handle} />
      <br />
      <button type="submit" className="m-2" onClick={() => console.log(value)}>
        Click
      </button>
    </div>
  );
}

export default App;
