import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Sell from './components/Sell';
import Buy from './components/Buy';
import CarDetails from './components/CarDetails';
import HouseDetails from './components/HouseDetails';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/sell" component={Sell} />
        <Route path="/buy" exact component={Buy} />
        <Route path="/buy/car/:id" component={CarDetails} />
        <Route path="/buy/house/:id" component={HouseDetails} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
