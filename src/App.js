import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Company from "./pages/Company";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />}>
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
