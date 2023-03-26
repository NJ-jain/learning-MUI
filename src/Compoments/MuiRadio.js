import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiRadio = () => {
  return (
        <Box> 
            <FormControl>
                <FormLabel id='job-experience-group=label'>
                    Years of Experience
                </FormLabel>

                <RadioGroup name='"job-experience-group' aria-labelledby='job-experience-group-label' >
                    <FormControlLabel value='0' control={<Radio />} label='0' />
                    <FormControlLabel value='1-2' control={<Radio />} label='1-2' />
                    <FormControlLabel value='3-5' control={<Radio />} label='3-5' />
                    <FormControlLabel value='5+' control={<Radio />} label='5+' />

                </RadioGroup>
            </FormControl>
        </Box>
  )
}

export default MuiRadio