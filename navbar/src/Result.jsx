import React from "react";
import { useParams } from "react-router-dom";

const Result = () => {
  const { id } = useParams();

  console.log(id, "res");

  const data = [
    {
      id: 1,
      title: "card-1",
      desc: "this is card 1",
    },
    {
      id: 2,
      title: "card-2",
      desc: "this is card 2",
    },
    {
      id: 3,
      title: "card-3",
      desc: "this is card 3",
    },
    {
      id: 4,
      title: "card-4",
      desc: "this is card 4",
    },
  ];

  const result = data.filter((e) => e.title == id);

  console.log(result, "result");
  return (
    <div>
      <div>
        <h1>{result[0].title}</h1>
        <h1>{result[0].desc}</h1>
      </div>
    </div>
  );
};

export default Result;
