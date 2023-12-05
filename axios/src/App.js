import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [data, setdata] = useState([]);

  const title = useRef();
  const author = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setdata(res.data || []);
    });
  }, []);

  function handlesubmit() {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };
    console.log(data);
    axios.post("http://localhost:3001/posts", result).then((res) => {
      console.log(res.data);
      setdata([...data, res.data]);
      Swal.fire({
        title: "Added...!",
        text: "Your data add successfuly!",
        icon: "success",
      });
    });
  }

  const daleteData = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      console.log(id);
      setdata(
        data.filter((e) => {
          return e.id !== id;
        })
      );
      Swal.fire({
        title: "Deleted..!",
        text: "Your data delete successfuly!",
        icon: "error",
      });
    });
  };

  console.log(data, "data");
  return (
    <div className="container">
      <div>
        <input type="text" name="title" ref={title} />
        <input type="text" name="author" ref={author} />
        <button onClick={handlesubmit}>submit</button>
<div class="row">
        {data?.map((val, ind) => {
          return (
            <div class="col-4">
            <div class="card mt-3" style={{ width: "18rem;"}}>
              <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text">{val.author}</p>
                <button onClick={() => daleteData(val.id)}>Delete</button>
              </div>
              </div>
              </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
