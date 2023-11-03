import React, { useState } from "react";

function Card(props) {
  const [value, setvalue] = useState([]);

  const { data } = props;
  console.log(props);

  const handleDelete = (name) => {
    setvalue(value.filter((e) => e.author !== name));
  };
  return (
    <>
      {data?.map((val) => (
        <div className="col-4">
          <div class="card mt-5" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{val.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{val.author}</h6>
              <button
                type="submit"
                className="m-2"
                onClick={() => handleDelete(val.author)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card