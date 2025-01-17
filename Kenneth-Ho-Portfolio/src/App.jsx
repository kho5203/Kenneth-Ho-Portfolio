import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Hobbies from "./pages/Hobbies";
import Experience from "./pages/Experience";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Hobbies" element={<Hobbies />} />
        <Route exact path="/Experience" element={<Experience />} />
        <Route exact path="/Contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
