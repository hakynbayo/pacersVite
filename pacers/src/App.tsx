import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

import './App.css'
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
// import Dashboard from "./components/Dashboard/Dashboard"


function App() {
  return (  
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Assessment" element={<Assessment />} />
        </Routes>
      </Router>
  );
}

export default App;