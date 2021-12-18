import React from "react";
import Nav from "./Nav";
import Home from "../components/Home";
import All from "../components/all";
import SparkOFtheQuater from "../components/SparkOFtheQuater";
import SparkOFtheMonth from "../components/SparkOFtheMonth";
import SparkOFtheYear from "../components/SparkOFtheYear";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/all" exact component={All} />
          <Route path="/SparkOFtheQuater" component={SparkOFtheQuater} />
          <Route path="/SparkOFtheMonth" component={SparkOFtheMonth} />
          <Route path="/SparkOFtheYear" component={SparkOFtheYear} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
