import React, { Component } from "react";

class NextPrevious extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="next" onClick={this.props.nextEvent}>
          next
        </button>
        <button className="previous" onClick={this.props.previousEvent}>
          previous
        </button>
      </div>
    );
  }
}

export default NextPrevious;
