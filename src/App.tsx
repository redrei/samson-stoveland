import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import Home from './Home';
import OverHeader from './Overheader';
import './App.css';

import Page2 from './Page2';
import Page3 from './Page3';


const TITLE = 'Samson-Stoveland';

function App() {
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch(page) {
            case 'home':
                return <Home/>;
            case 'page2':
                return <Page2 />;
            case 'page3':
                return <Page3 />;
            default:
                return <Home />;
        }
    };
  return (

    <div className="App">

        <OverHeader setPage={setPage}></OverHeader>
        {renderPage()}
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
    </div>
  );
}

export default App;
