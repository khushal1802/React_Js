import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside
        className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
        id="show-side-navigation1"
      >
        <i
          className="uil-bars close-aside d-md-none d-lg-none"
          data-close="show-side-navigation1"
        ></i>
        <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
          <img
            className="rounded-pill img-fluid"
            width="65"
            src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
            alt=""
          />
          <div className="ms-2">
            <h5 className="fs-6 mb-0">
              {/* <Link className="text-decoration-none" href="#">
                Jone Doe
              </Link> */}
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
          <i className="fa fa-search position-absolute d-block fs-6"></i>
        </div>

        <ul className="categories list-unstyled">
          <li className="has-dropdown">
            <i className="uil-estate fa-fw"></i>
            <Link to={"/"} class="nav-link"> Dashboard</Link>
          </li>
          <li className="">
            <i className="uil-folder"></i>
            <Link to={"/faculty"} class="nav-link">Faculty</Link>
          </li>
          <li className="has-dropdown">
            <i className="uil-shopping-cart-alt"></i>
            <Link to={"/cofaculty"} class="nav-link">Faculty co-odinate</Link>
          </li>
                  <li className="has-dropdown">
            <i className="uil-bag"></i>
            <Link to={"/student"} class="nav-link">Student</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
