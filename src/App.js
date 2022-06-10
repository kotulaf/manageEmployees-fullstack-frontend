import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <Router>
            <div className='container'>
                <HeaderComponent/>
                <div className="container">
                  <Switch>
                    <Route path = "/" component = {ListEmployeeComponent}><ListEmployeeComponent/></Route>
                    <Route path = "/employees" component = {ListEmployeeComponent}><ListEmployeeComponent/></Route>
                  </Switch>
                </div>
                <FooterComponent/>
            </div>
        </Router>
    </div>
  );
}

export default App;
