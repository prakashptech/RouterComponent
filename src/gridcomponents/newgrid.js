

import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Form from "../formcomponents/form";

class NewGrid extends React.Component {

  // handleChild = () => {
    
  // }

  handleClick = () => {
    this.props.history.push("/");
    console.log(this.props);
  };
  state = { input_one: "Deepak" };
  handleChange = (e) => {
    this.setState({ input_one: e.target.value });
    console.log(e.target.value);
  };
  render() {
    return (
      <Grid container>
        <Grid container xs={12} lg={6} justify="center">
          
          <TextField container xs = {12} lg= {6} justify ="center"
            id="standard-basic"
            label="First"
            value={this.input_one}
            onChange={this.handleChange}
          />
          {/* {this.state.input_one} */}
        </Grid>
        <Grid container xs={12} lg={6} justify="center">
          <TextField id="standard-basic" label="Second" />
        </Grid>
        <Grid container xs={12} lg={6} justify="center">
          <TextField id="standard-basic" label="Third" />
        </Grid>
        <Form attr={this.state.input_one} />
        <button onClick={this.handleClick}>Switch</button> 
        {/* we are calling here hancleClick to go to previous page */}
      </Grid>
       
    );
  }
}

export default NewGrid;

// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import { TextField } from "@material-ui/core";
// import Form from "../formcomponents/form";
// // import Child from "../formcomponents/form1";

// class NewGrid extends React.Component {

//   // handleChild = () => {
    
//   // }
// // why we are using handleClick function
//   handleClick = () => {
//     this.props.history.push("/");
//     console.log(this.props);
//   };
//   state = { input_one: "Deepak"};
//   handleChange = (e) => {
//     this.setState({ input_one: e.target.value });
//     console.log(e.target.value);
//   };
//   render() {
//     return (
//       <Grid container>
//         <Grid container xs={12} lg={6} justify="center">
//           <TextField
//             id="standard-basic"
//             label="First"
//             value={this.input_one}
//             onChange={this.handleChange}
//           />
//           {this.state.input_one}
//         </Grid>
//         <Grid container xs={12} lg={6} justify="center">
//           <TextField id="standard-basic" label="Second" />
//         </Grid>
//         <Grid container xs={12} lg={6} justify="center">
//           <TextField id="standard-basic" label="Third" />
//         </Grid>
//         <Form attr={this.state.input_one} />

//         <button onClick={this.handleClick}>Switch</button>
//       </Grid>
//       <div>
//         <Form attr={this.state.input_one}/>
//         {/* <Child attr1 = {this.state.input_two } attr2 = {this.state.input_three} atrr3 = {this.state.input_four}/> */}
//       </div>
       
//     );
//   }
// }

// export default NewGrid;