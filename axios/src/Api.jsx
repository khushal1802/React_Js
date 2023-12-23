import axios from "axios";
import React, { useEffect, useState } from "react";

function Api() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setData(res.data || []);
    });
  }, []);

  const handleSubmit = async () => {
      axios.post("http://localhost:3001/posts", formData).then((res) => {
          setData([...data, res.data]);
      })
      setFormData({
        fname: "",
        lname: "",
        email: "",
        number: "",
        address: "",
      });
  };

    const deletedata =(id) => {
        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
          console.log(id);
          setData(
            data.filter((e) => {
              return e.id !== id;
            })
          );
        });
    }
  return (
    <div className="container">
      First Name :~
      <input
        type="text"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
      />
      <br />
      Last Name :~
      <input
        type="text"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
      />
      <br />
      Email :~
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      Number :~
      <input
        type="tel"
        name="number"
        value={formData.number}
        onChange={handleChange}
      />
      <br />
      Address :~
      <textarea
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div className="row">
        {data?.map((val, ind) => (
          <div className="col-4" key={ind}>
            <div className="card mt-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{val.fname}</h5>
                <p className="card-text">{val.lname}</p>
                <p className="card-text">{val.email}</p>
                <p className="card-text">{val.number}</p>
                <p className="card-text">{val.address}</p>
                <button onClick={()=>deletedata(val.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
