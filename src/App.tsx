import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

import './App.css'
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import Quiz from "./pages/Quiz";
import Chatbox from "./pages/Chatbox";
import Settings from "./pages/Setting";
import SeeAll from "./pages/SeeAll";
import SeeAllComplete from "./pages/SeeAllCompleted";
import EditProfile from "./pages/EditProfile";
// import Dashboard from "./components/Dashboard/Dashboard"


function App() {
  return (  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Assessment" element={<Assessment />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Chatbox" element={<Chatbox />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/SeeAll" element={<SeeAll />} />
          <Route path="/seeallcomplete" element={<SeeAllComplete />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </Router>
  );
}

export default App;