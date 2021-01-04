import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Hero from './components/pages/Hero';

function App(){
    return(
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path ='/' exact component={Hero} />

                </Switch>

                


            </Router>
        </>
    );
}
export default App; 