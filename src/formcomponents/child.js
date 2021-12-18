import React from "react";

export default class Child extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.data.unit}</h1>
          <button onClick={() => this.props.data.changeUnit("speed m/s")}>
            click me
          </button>
        </div>
      );
    }
  }
  