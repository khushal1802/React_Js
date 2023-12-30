import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const fname = useRef();
  const lname = useRef();
  const comment = useRef();

  const [data, setdata] = useState();
  const [view, setview] = useState({});
  const [index, setindex] = useState();

  const arr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  function handleSubmit() {
    const data = {
      fname: fname.current.value,
      lname: lname.current.value,
      comment: comment.current.value,
    };
    arr.push(data);
    localStorage.setItem("data", JSON.stringify(arr));
    setdata([...arr]);
  }

  useEffect(() => {
    setdata([...arr]);
  }, []);

  const daleteData = (ind) => {
    arr.splice(ind, 1);
    localStorage.setItem("data", JSON.stringify(arr));
    setdata([...arr]);
  };

  const viewData = (val, ind) => {
    setview(val);
    setindex(ind);
  };

  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };
  const update = () => {
    arr.splice(index, 1, view);
    localStorage.setItem("data", JSON.stringify(arr));
    setdata([...arr]);
  };

  return (
    <>
      <div class="container">
        <div>
          First Name :~
          <input type="text" name="fname" ref={fname}></input>
          <br />
          Last Name :~
          <input type="text" name="lname" ref={lname}></input>
          <br />
          Comment :~
          <textarea type="text" name="comment" ref={comment}></textarea>
          <br />
          <button onClick={handleSubmit}>submit</button>
          <br />
          First Name :~
          <input
            type="text"
            name="fname"
            onChange={handle}
            value={view.fname}
          ></input>
          <br />
          Last Name :~
          <input
            type="text"
            name="lname"
            onChange={handle}
            value={view.lname}
          ></input>
          <br />
          Comment :~
          <textarea type="text" name="comment" onChange={handle} value={view.comment}>
          </textarea>
          <br />
          <button onClick={update}>Update</button>
        </div>

        <div class="row">
          {data?.map((val, ind) => {
            return (
              <div class="col-4" key={ind}>
                <div class="card mt-3" style={{ width: "18rem;" }}>
                  <div class="card-body">
                    <h5 class="card-title">{val.fname}</h5>
                    <p class="card-text">{val.lname}</p>
                    <p class="card-text">{val.comment}</p>
                    <button className="m-3" onClick={() => daleteData(ind)}>Delete</button>
                    <button onClick={() => viewData(val, ind)}>view</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;

