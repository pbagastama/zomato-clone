import React from "react";
// import CityCard from "./components/CityCard";
import Navbar from "./component/navbar/Navbar";
import ImageandWelcome from "./component/welcome/ImageandWelcome";
import FeatureCities from "./component/feature/FeatureCities";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <ImageandWelcome />
      <FeatureCities cities={citiesDummy} />
      {/* <CityCard /> */}
      <div
        className="container"
        style={{ marginTop: 30, marginBottom: 30 }}
      ></div>
    </div>
  );
}

export default App;
