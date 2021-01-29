import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Form from './components/Form';
import axios from 'axios';
import './App.css';
import * as yup from 'yup';
import schema from './Schema'

const App = () => {
  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <h2>Taylor's Pizza</h2>
      <nav>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/pizza'><h2>Order Online</h2></Link>
      </nav>
      </header>
      <Switch>
        <Route path='/pizza'>
          <Form/>
        </Route>
        <Route path='/'>
          <p>The best pizza around. Click the link above to start your order</p>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
