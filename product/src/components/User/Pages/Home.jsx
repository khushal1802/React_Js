import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Cart from "./Cart";

const Home = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  // const [cart, setcart] = useState([]);

  const arr = JSON.parse(localStorage.getItem("data")) || [];

  console.log(arr);
  useEffect(() => {
    setdata(arr);
  }, []);

  const handleAddToCart = (val, ind) => {
    console.log(val);
    localStorage.setItem("cart", JSON.stringify([val]));
    navigate("./cart");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {data?.map((val, ind) => {
            return (
              <div className="col-4" key={ind}>
                <div className="card mt-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{val.pname}</h5>
                    <p className="card-text">{val.dec}</p>
                    <p className="card-text">{val.price}</p>
                    <button onClick={() => handleAddToCart(val, ind)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Cart data={cart} /> */}
    </>
  );
};

export default Home;
