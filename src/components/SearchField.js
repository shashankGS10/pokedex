import React, { Component } from "react";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          onChange={this.handleChange}
          value={this.state.value}
          className="searh-bar"
        />
        <button
          type="button"
          onClick={() => this.props.search(this.state.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default SearchField;
