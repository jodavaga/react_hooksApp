import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 } from 'react-router-dom';

import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { NavBar } from './NavBar';
 
export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <Switch>
                    <Route exact path="/" component={ HomePage }></Route>
                    <Route exact path="/login" component={ LoginPage }></Route>
                    <Route exact path="/about" component={ AboutPage }></Route>

                    {/* if any link rounte found, will redirect to homepage */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
