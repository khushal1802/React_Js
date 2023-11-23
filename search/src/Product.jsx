import { useState} from "react";
import { Data } from "./Data";

function Product() {
    const [val, setval] = useState(Data);
    const [searchPrice, setsearchPrice] = useState();

    const handleSearch = (e) => {
        setval(val.filter((e) => e.availability !== false));
       const filteredProducts = Data.filter(
         (product) => product.price <= parseInt(searchPrice)
       );
       setval(filteredProducts);
    }

  return (
    <div>
      <h1 className="text-center">Welcome to the Product page!</h1>
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        value={searchPrice}
        name="price"
        onChange={(e) => setsearchPrice(e.target.value)}
        style={{ width: "18rem" }}
      />
      <input
        class="form-control m-2"
        type="range"
        value={searchPrice}
        onChange={(e) => setsearchPrice(e.target.value)}
              style={{ width: "18rem" }}
              min={100}
              max={1000}
      />
      <button
        class="btn btn-outline-success"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>

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

export default Product;
