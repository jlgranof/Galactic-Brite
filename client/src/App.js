import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux'
import { setUser } from './actions/authActions'

// core components
import UserList from './components/UsersList';
import LandingPage from './components/LandingPage/LandingPage'
import PageNotFound from './components/PageNotFound/PageNotFound'

//? ideas
import TestPage from './components/TestPage/TestPage'
import SecondTestPage from './components/TestPage/SecondTestPage'



function App() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        const generateSession = async () => {
            const res = await fetch("/api/session")
            if (res.ok) {
                res.data = await res.json()
                dispatch(setUser(res.data.user))
            }
            setLoading(false);
        }
        // generateSession();
    }, [])

    if(loading) return null
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/users"><UserList /></Route>
                <Route exact path="/test-page"><TestPage/></Route>
                <Route exact path="/secondTest-page"><SecondTestPage/></Route>
                <Route exact path="/"><LandingPage/></Route>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
