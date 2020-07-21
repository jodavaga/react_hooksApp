import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
 } from 'react-router-dom';

import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
 
export const AppRouter = () => {
    return (
        <Router>
            <div>

            </div>

            <Switch>
                <Route exact path="/" component={ HomePage }></Route>
                <Route exact path="/login" component={ LoginPage }></Route>
                <Route exact path="/about" component={ AboutPage }></Route>
            </Switch>
        </Router>
    )
}
