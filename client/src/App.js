import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// main components
import UserList from './components/UsersList';
import LandingPage from './components/LandingPage/LandingPage'

//? ideas
import TestPage from './components/TestPage/TestPage'
import SecondTestPage from './components/TestPage/SecondTestPage'


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/users"><UserList /></Route>
                <Route exact path="/test-page"><TestPage/></Route>
                <Route exact path="/secondTest-page"><SecondTestPage/></Route>
                <Route exact path="/"><LandingPage/></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
