import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cookies from "js-cookie";

// redux
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './Redux/actions/authActions'
import { fetchFeaturedEvents } from './Redux/actions/featuredActions'
import {fetchRandomEvents } from './Redux/actions/eventsActions'

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
    const featured = useSelector(state => state.eventsSlice.featuredEvents)
    const auth = useSelector(state => state.auth)



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
            setLoading(false)
        }
        //preload ALL events in redux
        const preloadEvents = () => {
            dispatch(fetchRandomEvents(10))
            setLoading(false);
        }
        const preloadFeaturedEvents = () => {
            dispatch(fetchFeaturedEvents())
            setLoading(false)

        }
        preloadFeaturedEvents()
        preloadEvents();
        generateSession();
    }, [loading])
    
    
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
                {featured ? featured.map((event, id) => (
                <Route key={id} path={`event-details/${event.id}`}>
                    <EventDetails />
                </Route>)
                ): null}
                <Route path="/event-details/random"><EventDetails/></Route>
                <Route component={PageNotFound}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
