import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import RentalList from "./components/rental/containers/RentalList";
import RentalDetail from "./components/rental/RentalDetail";
import NotFound from "./components/NotFound";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/rentals"/>}/>
            <Route exact path="/rentals" render={(props) => <RentalList {...props}/>}/>
            <Route exact path="/rentals/:id" render={(props) => <RentalDetail {...props}/>}/>

            <Route exact path="/login" render={(props) => <Login {...props}/>}/>
            <Route exact path="/signup" render={(props) => <Signup {...props}/>}/>

            <NotFound/>
          </Switch>

      </div>
    );
  }
}

export default App;
