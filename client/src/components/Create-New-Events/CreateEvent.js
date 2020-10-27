import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

// core components
import Header from '../Header/Header'
import CustomInput from '../SupportComponents/CustomInput'
// import CarouselComponent from '../CarouselComponent/CarouselComponent'
import {createEventThunk} from '../../actions/eventsActions'
import SimpleSelect from'./SimpleSelect'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        // zIndex: 100,
        // height: "200px",
        // width: "50%",
        // margin: "0 auto",
        // backgroundColor: "blue",
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: " 1fr 2fr 1fr",
        width:"100vw",
        height:"100vh",
        backgroundColor: "yellow"
    },
    middle: {
        gridRow: "2/3",
        gridColumn: "4/5"

    }
})


const CreateEventForm = () => {
    const classes = useStyles()

    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [details, setDetails] = useState("")
    const [category, setCategory] = useState('');
    console.log(category);
    const [planet, setPlanet] = useState('');


    const dispatch = useDispatch()
    const host_id= 1;

    const handleSubmit = (e) =>{
        const event = {
            name:name,
            event_description: description,
            event_details: details,
            event_date: date,
            event_planet: planet,
            category_id: category,
            host_id,

        }
        e.preventDefault();
        dispatch(createEventThunk(event))

    }
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className={classes.container}>
                <div className={classes.middle}>
                    <form method='post' action=''>
                        <div>
                            <button type='submit' onClick={handleSubmit}>
                            Create New Event
                            </button>
                        </div>

                        <div>
                            <CustomInput inputValue={name} labelText={'Name Event'} setStateFunc={setName}/>
                        </div>
                        <div>
                            {/* custom react component for calnedar */}
                            <CustomInput labelText={'Date'} setStateFunc={setDate}/>
                        </div>
                        <div>
                            <SimpleSelect
                            planet={planet}
                            category={category}
                            setCategory={setCategory}
                            setPlanet={setPlanet}
                            />
                            <CustomInput labelText={'Category'} setStateFunc={setCategory}/>
                        </div>
                        <div>
                            <CustomInput labelText={'Details'} setStateFunc={setDetails} multiline={true} rows={3}/>
                        </div>
                        <div>
                            <CustomInput labelText={'Description'} setStateFunc={setDescription} multiline={true} rows={3}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CreateEventForm;
