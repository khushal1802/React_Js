import React, { useEffect, useState } from "react";

const Cart = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const arr = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setdata([...arr]);
  }, []);

  const handalCancle = (ind) => {
    const updatedCart = [...data];
    updatedCart.splice(ind, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setdata(updatedCart);
  };

  console.log(data);

  return (
    <>
      <div className="container">
        <h2>Shopping Cart</h2>
        <div className="row">
          {data.map((val, ind) => (
            <div className="col-4" key={ind}>
              <div className="card mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{val.pname}</h5>
                  <p className="card-text">{val.dec}</p>
                  <p className="card-text">{val.price}</p>
                  <button onClick={() => handalCancle(ind)}>Cancel</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
