import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    return () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((result) => setdata(result));
    };
  }, []);

  console.log(data);
  return (
    <div>
      {data?.map((val,ind) => (
        <div>
          <h2>{val.id}</h2>
          <h1>{val.title}</h1>50
        </div>
      ))}
   </div>
  );
}

export default App;
