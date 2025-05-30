import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Buscar from "./pages/Buscar";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs"; // Asegúrate de que la ruta esté bien

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;