import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
