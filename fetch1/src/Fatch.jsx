import { useEffect, useState } from "react";

function Fatch() {
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
      {data?.map((val, ind) => (
        <div>
          <h2>{val.id}</h2>
          <h1>{val.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Fatch;
