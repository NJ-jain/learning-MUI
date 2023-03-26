import { Box , TextField , MenuItem} from '@mui/material'
import React , {useState} from 'react'

const MuiSelect = () => {
    const [countries, setcountries] = useState([])
    console.log(countries)
    const countryHandler = (e) => {         
        const value = e.target.value;
        setcountries(typeof value === "string" ? value.split(',') : value)
    }
  return (
    <Box width='250px' >
        <TextField label="Select Country " value={countries} onChange={countryHandler} fullWidth select SelectProps={{multiple : true}} size="small" color='secondary' helperText="Please select your country " error>
            <MenuItem value="In">India</MenuItem>
            <MenuItem value="Us">USA</MenuItem>
            <MenuItem value="AU ">Austria</MenuItem>
            
        </TextField>
    </Box>
  )
}

export default MuiSelect



// here box is just like a plane old div