import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import RentalList from "./components/rental/RentalList";
import RentalDetail from "./components/rental/RentalDetail";


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <Route exact path="/" render={() => <Redirect to="/rentals"/>}/>
        <Route exact path="/rentals" render={(props) => <RentalList {...props}/>}/>
        <Route exact path="/rentals/:id" render={(props) => <RentalDetail {...props}/>}/>


      </div>
    );
  }
}

export default App;
