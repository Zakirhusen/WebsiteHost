import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";

const App = () => {
    return (
        <>
            <Navbar/>        
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/services' component={Services}/>
                <Redirect to='/'/>
            </Switch>
           {/* <Home/>  */}
        </>
    )
}

export default App
