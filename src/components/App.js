import React, { Component } from "react";
import "./styles/App.css";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import NextPrevious from "./NextPrevious";
import SearchFeild from "./SearchField";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextUrl: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
      previousUrl: null,
      defaultUrl: "https://pokeapi.co/api/v2/pokemon/",
      data: null,
      searchTerm: ""
    };
    this.nextEvent = this.nextEvent.bind(this);
    this.previousEvent = this.previousEvent.bind(this);
    this.searchFeild = this.searchFeild.bind(this);
  }
  nextEvent() {
    let nxtUrlToString = this.state.nextUrl;
    let offsetValue = nxtUrlToString.slice(
      nxtUrlToString.indexOf("=") + 1,
      nxtUrlToString.lastIndexOf("&limit")
    );
    let offsetValueInt = parseInt(offsetValue) + 20;
    let nxtUrl = nxtUrlToString.replace(
      nxtUrlToString.slice(
        nxtUrlToString.indexOf("=") + 1,
        nxtUrlToString.lastIndexOf("&limit")
      ),
      offsetValueInt.toString()
    );
    this.setState({
      previousUrl: this.state.defaultUrl,
      defaultUrl: this.state.nextUrl,
      nextUrl: nxtUrl
    });
  }

  previousEvent() {
    let lstUrlToString = this.state.previousUrl;
    let offsetValue = lstUrlToString.slice(
      lstUrlToString.indexOf("=") + 1,
      lstUrlToString.lastIndexOf("&limit")
    );
    let offsetValueInt = parseInt(offsetValue) - 20;
    let lastUrl = lstUrlToString.replace(
      lstUrlToString.slice(
        lstUrlToString.indexOf("=") + 1,
        lstUrlToString.lastIndexOf("&limit")
      ),
      offsetValueInt.toString()
    );

    this.setState({
      defaultUrl: this.state.previousUrl,
      previousUrl: lastUrl,
      nextUrl: this.state.defaultUrl
    });
  }

  handleOnClick = details => {
    this.setState({
      data: details
    });
  };

  searchFeild = pokemonName => {
    const updatedUrl = this.state.defaultUrl.concat(pokemonName);
    console.log(updatedUrl);
    this.setState({
      searchTerm: updatedUrl
    });
  };

  render() {
    const { defaultUrl, searchTerm } = this.state;

    return (
      <div className="App">
        <SearchFeild search={this.searchFeild} />
        <PokeList
          defaultUrl={defaultUrl}
          handleOnClick={details => this.handleOnClick(details)}
          searchTerm={searchTerm}
        />
        <NextPrevious
          nextEvent={this.nextEvent}
          previousEvent={this.previousEvent}
        />
        <DetailView dataList={this.state.data} />
      </div>
    );
  }
}

export default App;
