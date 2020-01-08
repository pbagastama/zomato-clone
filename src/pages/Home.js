import React, { Component } from "react";
import ImageAndWelcome from "../component/ImageWelcome/ImageAndWelcome";
import CityList from "../component/feature/CityList";
import SearchCity from "../component/search/SearchCity";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  render() {
    const citiesDummy = [
      { id: 72, name: "Jakarta", country_name: "Indonesia" },
      { id: 11052, name: "Bandung", country_name: "Indonesia" },
      { id: 170, name: "Bali", country_name: "Indonesia" }
    ];
    return (
      <div>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList title={"Featured Cities"} cities={citiesDummy} />
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
          />
          <CityList title={"Search Result"} cities={citiesDummy} />
        </div>
      </div>
    );
  }
}

export default Home;
