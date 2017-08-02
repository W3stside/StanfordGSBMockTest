import React from 'react';
// import { Link } from 'react-router-dom';
// import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        <h1>Please select the BEST answer for the following questions:</h1>
        { Routes }
        {/* <footer className={footer}>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
        </footer> */}
    </div>;

export default App;
