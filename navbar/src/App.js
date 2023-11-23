import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Navbar from './Navbar';
import Result from './Result';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:id" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
