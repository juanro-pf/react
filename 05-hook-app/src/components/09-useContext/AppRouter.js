import React from 'react';
import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>

                    <Navbar />

                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component= { HomeScreen } />
                            <Route exact path='/login' component= { LoginScreen } />
                            <Route exact path='/about' component= { AboutScreen } />
                            {/* <Route component= { HomeScreen } /> */}
                            <Redirect to='./' />
                        </Switch>
                    </div>

                </div>
            </Router>
        </div>
    );
};
