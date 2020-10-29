import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cookies from "js-cookie";

// redux
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './actions/authActions'
import { fetchFeaturedEvents } from './actions/featuredActions'
import {fetchRandomEvents } from './actions/eventsActions'

// core components
import UserList from './components/UsersList';
import LandingPage from './components/LandingPage/LandingPage'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Dashboard from './components/Dashboard/Dashboard'
import AboutUsPage from './components/AboutUsPage/AboutUsPage'
import Footer from './components/Footer/Footer'
import EventDetails from './components/EventDetails/EventDetails'

//? ideas
import SecondTestPage from './components/TestPage/SecondTestPage'
import CreateEventForm from './components/Create-New-Events/CreateEvent'


function App() {
    // const [fetchWithCSRF, setFetchWithCSRF] = useState(()=> fetch)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const events = useSelector(state => state.eventsSlice.events)

    useEffect(()=>{
        
        const generateSession = async () => {
            const res = await fetch("/api/session/token/refresh", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'access': Cookies.get("access_token_cookie")
                },
            })
            if (res.ok) {
                const data = await res.json()
                dispatch(setUser(data))
            }
            setLoading(false);
        }
        //preload ALL events in redux
        const preloadAllEvents = async () => {
            dispatch(fetchFeaturedEvents())
            dispatch(fetchRandomEvents(10))
        }
        generateSession();
        preloadAllEvents()
    }, [loading])

    const id = 1
    if(loading) return null
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/users"><UserList /></Route>
                <Route exact path="/dashboard"><Dashboard/></Route>
                <Route exact path="/secondTest-page"><SecondTestPage/></Route>
                <Route exact path="/"><LandingPage/></Route>
                <Route exact path="/create-event"><CreateEventForm/></Route>
                <Route exact path="/AboutUs"><AboutUsPage/></Route>
                <Route path={`event-details/${id}`}><EventDetails/></Route>
                <Route component={PageNotFound}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
