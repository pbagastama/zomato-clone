import React, { Component } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./component/footer/Footer";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
