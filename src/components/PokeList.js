import React, { Component } from "react";
import PokeCell from "./PokeCell";
import "./styles/PokeList.css";

class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: "",
      items: []
    };
  }
  componentDidUpdate(nextprops) {
    if (nextprops.defaultUrl !== this.props.defaultUrl) {
      fetch(this.props.defaultUrl)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              items: result.results
            });
            console.log(result);
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    } else if (this.props.searchTerm !== nextprops.searchTerm) {
      fetch(this.props.searchTerm)
        .then(res => res.json())
        .then(
          result => {
            console.log(`elseif-pokelist-${result}`);
            this.setState({
              isLoaded: true,
              items: [result]
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  }

  componentDidMount() {
    fetch(this.props.defaultUrl)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { isLoaded, items = [], error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    const cells = items.map(elem => {
      return (
        <PokeCell
          key={elem.name}
          name={elem.name}
          url={elem.url}
          handleOnClick={details => this.props.handleOnClick(details)}
        />
      );
    });
    return <section className="poke-list">{cells}</section>;
  }
}

export default PokeList;

/*
.rt-holder .rt-detail .entry-content {
    position: relative;
    bottom: 80px;
		font-size:18px;
		font-family:roboto;
		font-weight:500;
		color:#5a5a5a !important;
		padding:0px 15px 0px 0px;
}

.rt-tpg-container .isotope1 .rt-holder .rt-detail{
	padding: 15px 15px 0px 0px !important;
}

*/
