import React from 'react'
import Nav from "../nav/navBar";
import About from "../sparks/home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import All from "../sparks/all";
import SparksOFtheMonth from "../sparks/sparksOftheMonth"
import SparksOFtheQuatar from "../sparks/SparksOftheQuater";
import SparksOFtheYear from "../sparks/sparksOftheYear";
import "./sparks.css";

function Spark() {
    return (
        
            <BrowserRouter>
            <div>
            <Switch>
            <Route path="/" exact component={About} /> 
            <Route path="/all" exact component={All} />
            <Route path="/sparksOftheMonth" exact component={SparksOFtheMonth}/>
            <Route path="/sparksOftheQuatar" exact component={SparksOFtheQuatar}/>
            <Route path="/sparksOftheYear" exact component={SparksOFtheYear}/>
            </Switch>
            <Nav />
            </div>
            </BrowserRouter>
            
            
        
        
    )
} 

export default Spark;
