import React from "react";
import Child from "../formcomponents/child";

class Parents extends React.Component {
    state = {
      unit: "km/hr",
    };
  
    changeUnit = (value) => {
      this.setState({ unit: value });
    };
  
    render() {
      return (
        <div>
          <h1>Pass data from child to parents</h1>
          <Child
            data={{
              unit: this.state.unit,
              changeUnit: this.changeUnit,
            }}
          />
        </div>
      );
    }
  }
  
  export default Parents;
  