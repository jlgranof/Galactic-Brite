import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux'
import { setUser } from './actions/authActions'
import { fetchFeaturedEvents } from './actions/featuredActions'
// import {fetchEvents } from './actions/eventsActions'

// core components
import UserList from './components/UsersList';
import LandingPage from './components/LandingPage/LandingPage'
import PageNotFound from './components/PageNotFound/PageNotFound'

//? ideas
import TestPage from './components/TestPage/TestPage'
import SecondTestPage from './components/TestPage/SecondTestPage'

import CreateEventForm from './components/Create-New-Events/CreateEvent'


function App() {
    // const [fetchWithCSRF, setFetchWithCSRF] = useState(()=> fetch)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()


    
    useEffect(()=>{
        const generateSession = async () => {
            const res = await fetch("/api/session/token/refresh", {
                method: 'post',
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                // dispatch(setUser(data.user))
            }
            setLoading(false);
        }
        
        //preload ALL events in redux
        const preloadAllEvents = async () => {
            dispatch(fetchFeaturedEvents())
        }
        generateSession();
        preloadAllEvents()
    }, [loading])

    if(loading) return null
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/users"><UserList /></Route>
                <Route exact path="/test-page"><TestPage/></Route>
                <Route exact path="/secondTest-page"><SecondTestPage/></Route>
                <Route exact path="/"><LandingPage/></Route>
                <Route exact path="/create-event"><CreateEventForm/></Route>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
