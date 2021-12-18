import React from "react";
import Child from "../formcomponents/form1";
class Parent extends React.Component {
    state = {  input_two : "rahul", input_three : "abhishek",input_four : "deepak"};
        render () {
                return (
                    <div>
                      <Child attr1 = {this.state.input_two } attr2 = {this.state.input_three} atrr3 = {this.state.input_four}/>
                    </div>
                )
        }
}
 export default Parent;