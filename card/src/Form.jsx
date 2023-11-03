import React, { useEffect, useState } from "react";
import { data } from './Data';


const Form = () => {

  const [value, setvalue] = useState([])
  const [val, setval]=useState({})

  const handleInputChange = (e) => {
    setval({ ...val , [e.target.name]: e.target.value });
  };
  const submit = () => {
    setvalue([...value, val]);
  };
  const handleDelete = (name) => {
    console.log(name);

    setvalue(value.filter((e) => e.author !== name));
  };

   useEffect(() => {
     setvalue(data);
   }, []);

  return (
    <div>
      <div>
        title:~
        <input type="text" name="title" onChange={handleInputChange} />
        author:~
        <input type="text" name="author" onChange={handleInputChange} />
      </div>
      <button type="button" className="m-2" onClick={submit}>
        Add
      </button>

      <div className="card-container">
        {value.map((val, ind) => (
          <div className="col-4">
            <div class="card mt-5" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{val.author}</h6>
                <button
                  type="submit"
                  className="m-2"
                  onClick={() => handleDelete(val.author)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
