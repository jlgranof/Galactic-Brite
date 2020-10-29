import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const baseYearArray = []
for(let i =0;i < 100; i++){
    if(i <50){
        baseYearArray.push(`${50-i}bby`);
    }else{
        baseYearArray.push(`${i-50}ayy`);
    }

}

export default function SimpleSelect({category,setCategory,planet,setPlanet,inputProps,labelInputProps,setDay,setMonth,day,month,year, setYear}) {
  const classes = useStyles();

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangePlanet = (event) => {
    setPlanet(event.target.value);
  };
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"
        {...labelInputProps}>Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChangeCategory}
          {...inputProps}
        >
          <MenuItem value={1}>Surprise Party</MenuItem>
          <MenuItem value={2}>Live Productions</MenuItem>
          <MenuItem value={3}>Live Executions</MenuItem>
          <MenuItem value={4}>Sports</MenuItem>
          <MenuItem value={5}>Tours</MenuItem>
          <MenuItem value={6}>Product Launches</MenuItem>
          <MenuItem value={7}>Seminars</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"
        {...labelInputProps}>Planet</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={planet}
          onChange={handleChangePlanet}
          {...inputProps}
        >
            <MenuItem value={'Dagobah'}>Dagobah</MenuItem>
            <MenuItem value={'Hoth'}>Hoth</MenuItem>
            <MenuItem value={'Tatooine'}>Tatooine</MenuItem>
            <MenuItem value={'Coruscant'}>Coruscant</MenuItem>
            <MenuItem value={'Naboo'}>Naboo</MenuItem>
            <MenuItem value={'Alderaan'}>Alderaan</MenuItem>
            <MenuItem value={'Mustafar'}>Mustafar</MenuItem>
            <MenuItem value={'Endor'}>Endor</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"
        {...labelInputProps}>Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          onChange={handleMonthChange}
          {...inputProps}
        >
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'5'}>5</MenuItem>
          <MenuItem value={'6'}>6</MenuItem>
          <MenuItem value={'7'}>7</MenuItem>
          <MenuItem value={'8'}>8</MenuItem>
          <MenuItem value={'9'}>9</MenuItem>
          <MenuItem value={'10'}>10</MenuItem>
          <MenuItem value={'11'}>11</MenuItem>
          <MenuItem value={'12'}>12</MenuItem>

        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"
        {...labelInputProps}>Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          onChange={handleDayChange}
          {...inputProps}
        >
          <MenuItem value={'01'}>1</MenuItem>
          <MenuItem value={'02'}>2</MenuItem>
          <MenuItem value={'03'}>3</MenuItem>
          <MenuItem value={'04'}>4</MenuItem>
          <MenuItem value={'05'}>5</MenuItem>
          <MenuItem value={'06'}>6</MenuItem>
          <MenuItem value={'07'}>7</MenuItem>
          <MenuItem value={'08'}>8</MenuItem>
          <MenuItem value={'09'}>9</MenuItem>
          <MenuItem value={'10'}>10</MenuItem>
          <MenuItem value={'11'}>11</MenuItem>
          <MenuItem value={'12'}>12</MenuItem>
          <MenuItem value={'13'}>13</MenuItem>
          <MenuItem value={'14'}>14</MenuItem>
          <MenuItem value={'15'}>15</MenuItem>
          <MenuItem value={'16'}>16</MenuItem>
          <MenuItem value={'17'}>17</MenuItem>
          <MenuItem value={'18'}>18</MenuItem>
          <MenuItem value={'19'}>19</MenuItem>
          <MenuItem value={'20'}>20</MenuItem>
          <MenuItem value={'21'}>21</MenuItem>
          <MenuItem value={'22'}>22</MenuItem>
          <MenuItem value={'23'}>23</MenuItem>
          <MenuItem value={'24'}>24</MenuItem>
          <MenuItem value={'25'}>25</MenuItem>
          <MenuItem value={'26'}>26</MenuItem>
          <MenuItem value={'27'}>27</MenuItem>
          <MenuItem value={'28'}>28</MenuItem>
          <MenuItem value={'29'}>29</MenuItem>
          <MenuItem value={'30'}>30</MenuItem>
          <MenuItem value={'31'}>31</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"
        {...labelInputProps}>Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          onChange={handleYearChange}
          {...inputProps}
        >
          {baseYearArray.map((ele,i) => <MenuItem value={ele}>{`${ele}`}</MenuItem>)}
                  </Select>
      </FormControl>
    </div>
  );
}
