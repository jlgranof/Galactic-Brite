import React,{useState} from 'react';

// core components
import Header from '../Header/Header'
import CustomInput from '../SupportComponents/CustomInput'
// import CarouselComponent from '../CarouselComponent/CarouselComponent'

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

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [planet, setPlanet] = useState("")
    const [category, setCategory] = useState("")
    const [details, setDetails] = useState("")

    return (
        <>
            <div>
                <Header/>
            </div>
            <div className={classes.container}>
                <div className={classes.middle}>
                    <form method='post' action=''>
                        <div>
                            <button type='submit'>
                            Create New Event
                            </button>
                        </div>

                        <div>
                            <CustomInput labelText={'Name Event'} setStateFunc={setName}/>
                        </div>
                        <div>
                            {/* custom react component for calnedar */}
                            <CustomInput labelText={'Date'} setStateFunc={setDate}/>
                        </div>
                        <div>
                            <CustomInput labelText={'Planet'} setStateFunc={setPlanet}/>
                        </div>
                        <div>
                            <CustomInput labelText={'Category'} setStateFunc={setCategory}/>
                        </div>
                        <div>
                            <CustomInput labelText={'Details'} setStateFunc={setDetails} multiline={true} rows={3}/>
                        </div>
                        <div>
                            <CustomInput labelText={'Description'} setStateFunc={setDescription} multiline={true} rows={3}/>
                        </div>
                    </form>
                    {/* id = db.Column(db.Integer, primary_key = True)
                    name = db.Column(db.String(100), nullable = False)
                    event_description = db.Column(db.String(5000), nullable = False)
                    host_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
                    event_date = db.Column(db.String(100), nullable = False)
                    event_planet = db.Column(db.String(50), nullable = False)
                    event_picture_url = db.Column(db.String(1000))
                    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable = False)
                    is_featured = db.Column(db.Boolean, nullable = False) */}

                </div>
            </div>
        </>
    )
}
export default CreateEventForm;
