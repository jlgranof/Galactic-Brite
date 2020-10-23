import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// main components
import UserList from './components/UsersList';
import TestPage from './components/TestPage/TestPage'
import Header from './components/Header/Header'
import LoginPage from './components/LoginPage/LoginPage'
import SignupPage from './components/SignupPage/SignupPage'

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/"><h1>My Home Page</h1></Route>
                <Route exact path="/users"><UserList /></Route>
                <Route exact path="/test-page"><TestPage/></Route>
                <Route exact path="/login-page"><LoginPage/></Route>
                <Route exact path="/signup-page"><SignupPage/></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
