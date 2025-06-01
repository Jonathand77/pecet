import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Buscar from "./pages/Buscar";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/about" element={<AboutUs />} /> {/* Nueva ruta */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;