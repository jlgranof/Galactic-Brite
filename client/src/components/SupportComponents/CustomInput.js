import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

// nodejs library that concatenates classes
import classNames from "classnames";

const useStyles = makeStyles({

})

const CustomInput = (props) => {
    const classes = useStyles();
    const {
        setStateFunc,
        inputValue,
        labelText,
        labelInputProps,
        id,
        inputProps,
        error,
        white,
        success,
        multiline,
        rows,
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
                {...labelInputProps}
                >
                {labelText}
                </InputLabel>
                    <Input
                    fullWidth={true}
                    required={true}
                    multiline={multiline}
                    rows={rows}
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
