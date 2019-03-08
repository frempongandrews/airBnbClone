import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route } from "react-router-dom";
import Header from "./components/Header";
import RentalList from "./components/rental/RentalList";
import RentalDetail from "./components/rental/RentalDetail";


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <Route exact path="/" render={(props) => <RentalList {...props}/>}/>
        <Route exact path="/rental" render={(props) => <RentalDetail {...props}/>}/>


      </div>
    );
  }
}

export default App;
