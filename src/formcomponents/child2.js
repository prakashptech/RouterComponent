import React from "react";

class Child2 extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.func}>Calling</button>
      </div>
    );
  }
}

export default Child2;