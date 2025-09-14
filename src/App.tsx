import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import PropertiesPage from "./Pages/PropertiesPage";
import PropertyInfo from "./Pages/PropertyInfo";
import Agents from "./Pages/Agents.tsx";
import TestingPage from "./Pages/TestingPage";
import Invest from "./Pages/Invest";

const App = () => {
  return (
    <div className="bg-gray-100 p-0">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:id" element={<PropertyInfo />} />
        <Route path="/agents/" element={<Agents />} />
        {/* <Route path="/testing/" element={<TestingPage />} /> */}
        <Route path="/invest/" element={<Invest />} />
      </Routes>
    </div>
  );
};

export default App;
