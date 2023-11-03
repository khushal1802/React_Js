import React from "react";

function Card(props) {
  const { data } = props;
  console.log(props);
  return (
    <>
      {data?.map((val) => (
        <div className="col-4">
          <div class="card mt-5" style={{ width: "18rem" }}>
            <img class="card-img-top" src={val.img} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">{val.foodname}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{val.price}</h6>
              <p class="card-text">{val.description}</p>
              <a href="#" class="card-link">
                {val.status}
              </a>
              <a href="#" class="card-link">
                More
              </a>
            </div>
          </div>z
        </div>
      ))}
    </>
  );
}

export default Card;
