import React from 'react';
import Individual from "./Components/Individual/Individual";

import { BrowserRouter,Route } from "react-router-dom"

import Main from "./Components/Main/Main"


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="title">Itunes Search</h1>
        <Route exact path="/home" component={Main}/>
        <Route path="/id/:trackId" component={Individual}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
