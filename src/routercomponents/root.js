import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "../formcomponents/form";
import NewGrid from "../gridcomponents/newgrid";
import About from "../aboutcomponents/about";
import Home from "../aboutcomponents/home";
import Service from "../servicecomponents/service";
import Parent from "../gridcomponents/parent";
import Parents from "../gridcomponents/parent1";
import Parent2 from "../gridcomponents/parent2";
import Contact from "../gridcomponents/contact";
import SparksMonth from "../sparks/sparksMonth";



class Root extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route  path="/" exact component={Form} />
            <Route path="/newgrid" exact component={NewGrid} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/parent" exact component={Parent} />
            <Route path="/home" exact component={Home} />
            <Route path="/parent1" exact component={Parents} />
            <Route path="/parent2" exact component={Parent2} />
            <Route path ="/contact" exact component={Contact} />
            <Route path="/sparksMonth" exact component={SparksMonth} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;