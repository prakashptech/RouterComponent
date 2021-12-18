import React from "react";
import Child2 from "../formcomponents/child2";

export default class Parent2 extends React.Component {
  fun = () => {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  };
  render() {
    return (
      <div>
        <Child2 func={this.fun} />
      </div>
    );
  }
}
