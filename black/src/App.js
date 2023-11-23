import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
// import Navbar from './Components/Navbar';
import Faculty from "./Components/Faculty";
import CoFaculty from "./Components/CoFaculty";
import Student from "./Components/Student";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/faculty" exact element={<Faculty />}></Route>
        <Route path="/cofaculty" exact element={<CoFaculty />}></Route>
        <Route path="/student" exact element={<Student />}></Route>
        {/* <Route path="/:id" element={<Result />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
