import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './Home';
import OverHeader from './Overheader';
import './App.css';


const TITLE = 'Samson-Stoveland';

function App() {
  return (
    <div className="App">

        <OverHeader></OverHeader>
        <Home></Home>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
    </div>
  );
}

export default App;
