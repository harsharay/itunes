import React from 'react';
import Individual from "./Components/Individual/Individual";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage"

import { BrowserRouter,Route,Switch,Link } from "react-router-dom"

import Main from "./Components/Main/Main"


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="title"><Link to="/itunes">Itunes Search</Link></h1>
        <Switch>
          <Route exact path="/itunes" component={Main}/>
          <Route path="/itunes/id/:trackId" component={Individual}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
