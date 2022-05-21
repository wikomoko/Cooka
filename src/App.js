import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navigasi from "./components/Navigasi";
import Beranda from "./pages/Beranda";
import Detail from "./pages/Detail";
import { Navbar, Nav, Container } from "react-bootstrap";
import Utama from "./pages/Utama";
function App() {
  return (
    <Router>
      <Navigasi />
      
        <Routes>
          <Route path="/" element={<Utama />} exact />
        </Routes>
        <Routes>
          <Route path="/beranda" element={<Beranda />} exact />
        </Routes>
        <Routes>
          <Route path="/baru/:id" element={<Detail />} />
        </Routes>
      
    </Router>
  );
}

export default App;
