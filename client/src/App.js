import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// main components
import UserList from './components/UsersList';
import TestPage from './components/TestPage/TestPage'
import LoginPage from './components/LoginPage/LoginPage'
import SignupPage from './components/SignupPage/SignupPage'
import LandingPage from './components/LandingPage/LandingPage'

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/users"><UserList /></Route>
                <Route exact path="/test-page"><TestPage/></Route>
                <Route exact path="/login-page"><LoginPage/></Route>
                <Route exact path="/signup-page"><SignupPage/></Route>
                <Route exact path="/"><LandingPage/></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
