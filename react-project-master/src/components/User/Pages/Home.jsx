import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const fname = useRef();
  const lname = useRef();
  const age = useRef();
  const [data, setdata] = useState([]);
  const [view, setview] = useState({});
  const [ind, setind] = useState();

  const arr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  function handleSubmit() {
    const data = {
      fname: fname.current.value,
      lname: lname.current.value,
      age: Number(age.current.value),
    };
    arr.push(data);
    localStorage.setItem("data", JSON.stringify(arr));
    setdata([...arr]);
  }

  useEffect(() => {
    setdata([...arr]);
  }, []);

  const deleteData = (ind) => {
    arr.splice(ind, 1);
    localStorage.setItem("data", JSON.stringify(arr));
    setdata([...arr]);
  };

  const handleView = (val, ind) => {
    setview(val);
    setind(ind);
  };

  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    arr.splice(ind, 1, view);
    localStorage.setItem("data", JSON.stringify(arr));
    setdata([...arr]);
  };

  console.log(data);

  return (
    <>
      <div className="container">
        <div>
          First Name :~
          <input
            type="text"
            name="fname"
            ref={fname}
            value={view.fname || ""}
            onChange={handle}
          ></input>
          <br />
          Last Name :~
          <input
            type="text"
            name="lname"
            ref={lname}
            value={view.lname || ""}
            onChange={handle}
          ></input>
          <br />
          Age :~
          <input
            type="number"
            name="age"
            ref={age}
            value={view.age || ""}
            onChange={handle}
          ></input>
          <br />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleUpdate}>Update</button>
        </div>

        <div className="row">
          {data?.map((val, ind) => (
            <div className="col-4" key={ind}>
              <div className="card mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{val.fname}</h5>
                  <p className="card-text">{val.lname}</p>
                  <p className="card-text">{val.age}</p>
                  <button onClick={() => deleteData(ind)}>Delete</button>
                  <button onClick={() => handleView(val, ind)}>Update</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
