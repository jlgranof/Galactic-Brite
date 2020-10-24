import React from 'react';

const CustomInput = () => {
    return (
        <div>
            <input placeholder="Hello"></input>
        </div>
    );
};

export default CustomInput;




// <FormControl {...formControlProps} className={formControlClasses}>
//     {labelText !== undefined ? (
//         <InputLabel
//             className={classes.labelRoot + " " + labelClasses}
//             htmlFor={id}
//             {...labelProps}
//         >
//             {labelText}
//         </InputLabel>
//     ) : null}
//     <Input className={id}
//         classes={{
//             input: inputClasses,
//             root: marginTop,
//             disabled: classes.disabled,
//             underline: underlineClasses
//         }}
//         id={id}
//         {...inputProps}
//         onChange={(e) => setStateFunc(e.target.value)}
//         value={inputValue}
//     />
// </FormControl>