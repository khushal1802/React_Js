import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [formData, setformData] = useState({});
  const [update, setupdate] = useState({});
  const [isUpdating ,setisUpdating]=useState(false)

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setData(res.data || []);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (e) => {
    setformData({
      ...formData,
      gender: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3001/posts", formData).then((res) => {
      console.log(res.data);
      setData([...data, res.data]);
    });
  };

  const daleteData = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      console.log(id);
      setData(
        data.filter((e) => {
          return e.id !== id;
        })
      );
    });
  };

  const updataData = (id, ind) => {
    const final = data[ind];
    setupdate(final);
    console.log(final);
    setisUpdating(true)
  };

  const finalUpdate = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
  };

  const final = () => {
    console.log(update, "update");

    axios
      .put(`http://localhost:3001/posts/${update.id}`, update)
      .then((res) => {
        // console.log(res.data, "update res");
        const updatedData = [...data];
        // console.log(updatedData, 'update...............');
        const index = updatedData.findIndex((item) => item.id === update.id);
        // console.log(index);
        updatedData[index] = res.data;
        // console.log(updatedData[index]);
        setData(updatedData);
        setisUpdating(false)
      });
  };

  const handleClick = () => {
    if (isUpdating) {
      final();
    } else {
      handleSubmit();
    }
}

  console.log(data);
  return (
    <div>
      <div className="container">
        First Name :~
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
        Last Name :~
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />
        <br />
        Gender:~ Male :
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleGenderChange}
        />
        Female :
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleGenderChange}
        />
        <br />
        Dob :~{" "}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        <br />
        Address :~{" "}
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        Assembly No and Name :~{" "}
        <input
          type="text"
          name="assembly"
          value={formData.assembly}
          onChange={handleChange}
        />
        <br />
        Part No and Name :~{" "}
        <input
          type="text"
          name="part"
          value={formData.part}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleClick}>
          {isUpdating ? "Update" : "Submit"}
        </button>
        <div className="row">
          {data?.map((val, ind) => (
            <div className="col-4" key={ind}>
              <div className="card mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    {val.fname} {val.lname}
                  </h5>
                  <p className="card-text">{val.gender}</p>
                  <p className="card-text">{val.dob}</p>
                  <p className="card-text">{val.address}</p>
                  <p className="card-text">{val.assembly}</p>
                  <p className="card-text">{val.part}</p>
                  <button onClick={() => daleteData(val.id)}>Delete</button>
                  <button onClick={() => updataData(val.id, ind)}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
