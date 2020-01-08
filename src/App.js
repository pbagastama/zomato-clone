import React from "react";
import Navbar from "./component/navbar/Navbar";
import ImageAndWelcome from "./component/ImageWelcome/ImageAndWelcome";
import FeaturedCities from "./component/feature/FeaturedCities";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const citiesDummy = [
    { id: 72, name: "Jakarta", country_name: "Indonesia" },
    { id: 11052, name: "Bandung", country_name: "Indonesia" },
    { id: 170, name: "Bali", country_name: "Indonesia" }
  ];
  return (
    <>
      <Navbar />
      <ImageAndWelcome />
      <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
        <FeaturedCities cities={citiesDummy} />
      </div>
    </>
  );
}

export default App;
