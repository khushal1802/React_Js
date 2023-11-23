import { useState, useEffect } from "react";
import { Data } from "./Data";

function Home() {
  const [val, setval] = useState(Data);

  useEffect(() => {
    setval(val.filter((e) => e.availability !== false));
  }, []);
  return (
    <div>
      <h1 className="text-center">Welcome to the home page!</h1>
      <div className="row">
        {val.map((val, ind) => (
          <div className="col-4">
            <div class="card mt-5" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{val.product}</h5>
                <p>{val.price}</p>
                <h6 class="card-subtitle mb-2 text-muted">{val.desc}</h6>
                <button type="submit" className="m-2">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
