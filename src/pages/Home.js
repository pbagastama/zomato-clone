import React, { Component } from "react";
import axios from "axios";
import ImageAndWelcome from "../component/ImageWelcome/ImageAndWelcome";
import CityList from "../component/feature/CityList";
import SearchCity from "../component/search/SearchCity";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featuredCities: null,
      citiesResultSearch: null,
      keyword: ""
    };
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  getFeaturedCities = () => {
    var url = "https://developers.zomato.com/api/v2.1/cities";
    axios
      .get(url, {
        headers: {
          "user-key": "d053bf1f3ee22dc8bfb54a3a76228361"
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
    var url = `https://developers.zomato.com/api/v2.1/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": "d053bf1f3ee22dc8bfb54a3a76228361"
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
