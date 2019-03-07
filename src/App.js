import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import RentalList from "./components/RentalList";
//


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <RentalList />


      </div>
    );
  }
}

export default App;
