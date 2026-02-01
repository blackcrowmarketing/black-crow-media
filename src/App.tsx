import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AgencyOS from "./pages/AgencyOS";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency-os" element={<AgencyOS />} />
      </Routes>
    </Router>
  );
}
