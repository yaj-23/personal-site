import React from 'react';
import './App.css';
// import Navbar from './components/navbar/Navbar';
// import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
// import Projects from './components/pages/Projects'


function App(){



    
    return(
        <div className='app'>  


          <Home/>
                    

      
            {/* <Router>
                <Navbar/>
                <Switch>
                    <Route path ='/' exact component={Home} />
                    <NavLink path='/about' component={About}/>

                </Switch>


                


            </Router> */}
        </div>
    );
}
export default App; 