
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navBar';
import Order from './components/order';
import AboutUs from './components/aboutus';
import Contact from './components/contact';
import HomePage from './components/homePage';
import Products from './components/products';
import Admin from './components/admin';
import NotFound from './components/not-Found';
import ProductDetails from './components/productDetails';
import LoginForm from './components/login';
import Subscribe from './components/subscribe';
import React from 'react';
import './App.css';
function App() {
  return (
    <React.Fragment>

      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/subscribe" component={Subscribe}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/products/:id" component={ProductDetails}></Route>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/orders" component={Order}></Route>
            <Route path="/aboutUs" component={AboutUs}></Route>
            <Route path="/products" render={(props) => <Products sortby="newest" {...props} />} />
            <Redirect from="/messages" to="/Home"/>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={HomePage}></Route>
            <Redirect to="not-found" />


          </Switch>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
