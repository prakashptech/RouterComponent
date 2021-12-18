




























  // class discussed 
// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import { TextField } from "@material-ui/core";

// class Grid1 extends React.Component {
//   state = { input_one: "", input_two: "", input_three: "" };

//   handleInput = (e) => {
//     this.setState({ input_one: e.target.value });
//     console.log(e.target.value);
//   };

//   componentDidUpdate() {
//     console.log("Component Did Update");
//     // this.setState({input_one : "Rahul"});
//   }
//   componentWillUpdate() {
//       console.log("Abhishek");
//   }

//   render() {
//     return (
//       <Grid container>
//         <Grid container xs={12} md={6} justify="center">
//           <TextField
//             id="standard-basic"
//             label="Standard"
//             value={this.state.input_one}
//             onChange={this.handleInput}
//           />
//           {this.state.input_one}
//         </Grid>
//         <Grid container xs={12} md={6} justify="center">
//          <TextField id="standard-basic" label="Standard2" />
//         </Grid>
//         <Grid container xs={3} justify="center">
//            <TextField id="standard-basic" label="Standard2" />
//          </Grid>
//          <Grid container xs={3} justify="center">

//            <TextField id="standard-basic" label="Standard2" />
//            <Grid container xs={3} justify="center">

//            <TextField id="standard-basic" label="Standard2" />

//          </Grid>

//          </Grid>
//       </Grid>
//     );
//   }
// }
// export default Grid1;


// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import { TextField } from "@material-ui/core";

// class Grid1 extends React.Component {
//   state = { input_one: "", input_two: "", input_three: "" };

//   handleInput = (e) => {
//     this.setState({ input_one: e.target.value });
//     console.log(e.target.value);
//   };

//   componentDidUpdate() {
//     console.log("Component Did Update");
//     // this.setState({input_one : "Rahul"});
//   }
//   componentWillUpdate() {
//       console.log("Abhishek");
//   }

//   render() {
//     return (
//       <Grid container>
//         <Grid container xs={12} md={3} justify="center">
//           <TextField
//             id="standard-basic"
//             label="Standard"
//             value={this.state.input_one}
//             onChange={this.handleInput}
//           />
//           {this.state.input_one}
//         </Grid>
//         <Grid container xs={12} md={6} justify="center">
//           <TextField id="standard-basic" label="Standard2" />
//         </Grid>
//         <Grid container xs={12} md={3} justify="center">
//           <TextField id="standard-basic" label="Standard3" />
//         </Grid>
//       </Grid>
//     );
//   }
// }
// export default Grid1;



//10 fields, and responisve. with 6 - 6 for lg and 12 -12 for xs

// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import { TextField } from "@material-ui/core";

//  class Grid1 extends React.Component {

//   state = { input_one : " ", input_two : " ", input_three : ""}


// handleInput = (e) => {
//     this.setState ({ input_one : e.target.value})
//     console.log(e.target.value);
// };

//     render () {
//         return (
//             <Grid container>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard1"
//                 value = { this.state.input_one}
//                 onChange = {this.handleInput}
                
//                 />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard2" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard3" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard4" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard5" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard6" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard7" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard8" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard9" />
//               </Grid>
//               <Grid container lg = {6} xs = {12} justify = "center">
//                 <TextField  id = "Standard-basic" label = "Standard10" />
//               </Grid>
//             </Grid>
//         )
//     }
// }
// export default Grid1;

// Lif cycle Methods

// import React, { Component } from 'react';
// class Grid1 extends React.Component {
//   constructor (){
//       super ();
//       console.log("constructor");
//       this.state = {
//           data : false,
//           count : 0,
//           msg : "click me"
//       }
//   }


//   onClick = () => {
//       this.setState({ count : this.state.count+1, msg : "clicked"})
//   }

// componentWillUpdate () {
//     console.log("componnetWillUpdate");
// }
//   componentDidUpdate () {
//       console.log("componenetDidUpdate");
//   }
//   componentDidMount () {
//       console.log("componenetDidMount");
//       this.setState({data : 'true'})
//   }
//     render () {
//       console.log("render");
//         return (
//             <div>
//               <h1> {this.state.count}</h1>
//               <button onClick = {this.onClick}>
//                {this.state.msg}
//               </button>
//               <p>
//                 <New receive = {this.state.count}/>
//               </p>
//             </div>
//         )
//     }
// }
// export default Grid1;

// class New extends Component {
//   // componentWillRecieveProps(newProp){
//   //     console.log("componentWillReceiveProps");
//   //     console.log("new property:" ,newProp);
//   // }
//     shouldComponentUpdate (){
//         console.log("shouldComponentUpdate");
//         return true;
//     }

// render () {
//     // return this.state.receive;
//     return (
//         <div>child Componenet.</div>
//     )
        
    
// }
// }
// import React from "react";
// import {Grid,Paper} from "Qmaterial-ui/core";
// import {makeStyles} from "@material-ui/core/styles";
// const useStyle = makeStyles((theme) =>({
//     grid : {
//         width : '100',
//         margin :'0px'
//       },
//       paper : {
//         padding : theme.spacing(2),
//         textAlign : 'center',
//         color : theme.palette.text.secondary,
//         background : theme.palette.success.light,
//       }
// }))
//  class  Grid1 extends React.Componenet {
//   const classes = useStyle();
//         render () {
//         return (
//             <Grid container spacing ={2} className = {classes.grid}>
//               <Grid item>
//                 <Paper classNmame = {classes.paper}>1</Paper>
//               </Grid>
//             </Grid>
        
//         )
//         }
// }
// export default Grid1;