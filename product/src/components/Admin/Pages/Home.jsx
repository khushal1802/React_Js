import React, { useEffect, useRef, useState } from "react";


const Home = () => {
  const pname = useRef();
  const dec = useRef();
  const price = useRef();
  const [data, setdata] = useState([]);
  const [view, setview] = useState({});
  const [ind, setind] = useState();

  const arr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  function handleSubmit() {
    const newData = {
      pname: pname.current.value,
      dec: dec.current.value,
      price: Number(price.current.value),
    };
    arr.push(newData);
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
          product Name :~
          <input
            type="text"
            name="pname"
            ref={pname}
            value={view.pname || ""}
            onChange={handle}
          ></input>
          <br />
          Description :~
          <input
            type="text"
            name="dec"
            ref={dec}
            value={view.dec || ""}
            onChange={handle}
          ></input>
          <br />
          price :~
          <input
            type="number"
            name="price"
            ref={price}
            value={view.price || ""}
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
                  <h5 className="card-title">{val.pname}</h5>
                  <p className="card-text">{val.dec}</p>
                  <p className="card-text">{val.price}</p>
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
