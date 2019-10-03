import React, { Component } from "react";
import "./styles/PokeCell.css";

class PokeCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      isLoaded: false,
      error: ""
    };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            details: result
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

  render() {
    const { isLoaded, details, error } = this.state;
    const { name, handleOnClick } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div onClick={() => handleOnClick(details)} className="poke-cell">
        {name}
        <img src={details.sprites.front_default} alt={name} />
      </div>
    );
  }
}

export default PokeCell;
