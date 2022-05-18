import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { MovieDeatils } from './components/MovieDeatils/MovieDeatils'
import { PageNotFound } from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={MovieDeatils} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
     <Footer/>
    </div>
  );
}

export default App;
