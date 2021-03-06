import React, { Component } from "react";
import axios from "axios";
import ImageAndWelcome from "../component/ImageWelcome/ImageAndWelcome";
import CityList from "../component/feature/CityList";
import SearchCity from "../component/search/SearchCity";

import { API } from "../config/api";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featuredCities: null,
      citiesResultSearch: null,
      keyword: "",
      cityKeywordSearch: ""
    };
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  getFeaturedCities = () => {
    var url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key
        },
        params: {
          city_ids: "74,11052,170"
        }
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({ featuredCities: data.location_suggestions });
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getFeaturedCities();
  }

  searchHandler = () => {
    let keyword = this.state.keyword;
    var url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key
        },
        params: {
          q: keyword
        }
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({
            citiesResultSearch: data.location_suggestions,
            keyword: " ",
            cityKeywordSearch: keyword
          });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          {/* <CityList title={"Featured Cities"} cities={citiesDummy} /> */}
          <CityList
            title={"Featured Cities"}
            cities={this.state.featuredCities}
          />
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
            onClickSearch={this.searchHandler}
          />
          {this.state.cityKeywordSearch !== "" && (
            <CityList
              title={"Search Result"}
              showSubtitle={true}
              subtitle={this.state.cityKeywordSearch}
              cities={this.state.citiesResultSearch}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
