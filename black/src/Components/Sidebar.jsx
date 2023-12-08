import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside
        className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
        id="show-side-navigation1"
      >
       
        <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
          <img
            className="rounded-pill img-fluid"
            width="65"
            src="https://th.bing.com/th/id/OIP.SxuyKL-Ca-_bXp1TC4c4-gHaF3?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="ms-2">
            <h5 className="fs-6 mb-0">
              <Link className="text-decoration-none" href="#">
                Jone Doe
              </Link>
            </h5>
            <p className="mt-1 mb-0">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="search position-relative text-center px-4 py-3 mt-2">
          <input
            type="text"
            className="form-control w-100 bg-transparent border border-light"
            placeholder="Search here"
          />
         
        </div>

        <ul className="categories list-unstyled">
          <li className="has-dropdown">
            <Link to={"/"} class="nav-link">
              {" "}
              Dashboard
            </Link>
          </li>
          <li className="">
            <Link to={"/faculty"} class="nav-link">
              Faculty
            </Link>
          </li>
          <li className="has-dropdown">
            <Link to={"/cofaculty"} class="nav-link">
              Faculty co-odinate
            </Link>
          </li>
          <li className="has-dropdown">
            <Link to={"/student"} class="nav-link">
              Student
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
