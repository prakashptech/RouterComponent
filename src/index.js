import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './routercomponents/root';
// import NewGrid from './gridcomponents/newgrid'
// import Contact from "./gridcomponents/contact";
// import Form from "./gridcomponents/company";
// import App from "./gridcomponents/contextp";
// import DashForm from "./contexttask/dashboard";
import Form from "./project/form";
// import Main from "./deanForm/main";
// import App from "./navbar/App";
// import Spark from "./nav/spark";
// import Design from "./clientproject/design";




ReactDOM.render(
  <React.StrictMode>
    {/* < Root /> */}
    {/* <Contact/>  */}
    {/* <App /> */}
    {/* <Form/> */}
    {/* <Main /> */}
    {/* <DashForm /> */}

    <Form />
    {/* <App /> */}
    {/* <Spark/>  */}
    {/* <Design /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
