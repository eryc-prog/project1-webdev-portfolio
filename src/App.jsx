import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "/src/LandingPage.jsx";
import MainPage from "/src/MainPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
