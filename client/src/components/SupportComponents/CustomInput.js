import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

// nodejs library that concatenates classes
import classNames from "classnames";

const useStyles = makeStyles({
    input: {
        borderRadius: "5px",
        opacity: 1,
        backgroundColor: "rgba(50, 50, 50, .2)",
        border: "1px solid white",
        "&:hover": {

        },



    }
})

const CustomInput = (props) => {
    const classes = useStyles();
    const {
        setStateFunc,
        inputValue,
        labelText,
        id,
        inputProps,
        error,
        white,
        success
    } = props;
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });
    return (
        <>
            <FormControl>
                <InputLabel
                htmlFor={id}
                >
                {labelText}
                </InputLabel>
                    <Input
                    fullWidth={true}
                    required={true}
                    className={classNames(
                        id, 
                        classes.input,
                        underlineClasses
                        )} 
                    {...inputProps}
                    onChange={(e) => setStateFunc(e.target.value)}
                    value={inputValue}
                    classes={{
                        underline: underlineClasses
                    }}
                    >
                    </Input>
            </FormControl>
        </>
    );
};

export default CustomInput;




