import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gray-100">
      <Navigation />
      <div className="pt-19">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
