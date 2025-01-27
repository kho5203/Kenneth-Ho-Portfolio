import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Hobbies from "./pages/Hobbies";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contacts from "./pages/Contacts";
import EntryAnimator from "./components/EntryAnimator";
import "./App.css";

function App() {
  const [entryAnimationFinished, setEntryAnimationFinished] = useState(false);

  useEffect(() => {
    // Set the animation to finish after 3.5 seconds
    setTimeout(() => {
      setEntryAnimationFinished(true);
    }, 3500);
  }, []);

  return entryAnimationFinished ? (
    <ReactLenis root>
      <Router>
        <div>
          {/* Navbar Component */}
          <NavBar />
          <Routes>
            {/* Define Routes for the main sections */}
            <Route path="/" element={<Home />} />
            <Route path="/Hobbies" element={<Hobbies />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  ) : (
    <EntryAnimator /> // Shows entry animation
  );
}

export default App;
