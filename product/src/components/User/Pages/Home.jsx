import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  const arr = JSON.parse(localStorage.getItem("data")) || [];

  useEffect(() => {
    setdata(arr);
  }, []);

  const handleAddToCart = (val,ind) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const isItemInCart = cartItems.some((item, index) => index === ind);

    if (!isItemInCart) {
      cartItems.push(val);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      navigate('/cart')
    } else {
      alert("This item already exists in your Cart");
    }
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
                    <button onClick={() => handleAddToCart(val,ind)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
