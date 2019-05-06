import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Resources from './components/Resources';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import About from './components/About';
import Blog from './components/Blog';
import Where from './components/Where';


const App = () => (
   <div>
      <Navigation />
      <Route exact path = "/" component = { Home } />
      <Route path='/articles' component = { Articles } />     
      <Route path='/resources' component = { Resources } />
      <Route path='/where' component = { Where } />
      <Route path='/blog' component = { Blog } />
      <Route path='/about' component = { About } />
      <Footer />
   </div>
);

export default App;

