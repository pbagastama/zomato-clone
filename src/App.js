import React, { Component } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./component/footer/Footer";
import City from "./pages/City";
import RestaurantDetail from "./pages/RestaurantDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/city/:city_id" component={City}></Route>
        <Route
          path="/restaurant/:restaurant_id"
          component={RestaurantDetail}
        ></Route>
        <Footer />
      </Router>
    );
  }
}

export default App;
