import React, { useState } from 'react'
import { Box, Checkbox, FormControl, FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'
// import { CheckBox } from '@mui/icons-material'
const MuiCheckbox = () => {
    const [acceptTnc, setacceptTnc] = useState(false)
    const handleChange = (e) => {   
     
        setacceptTnc(e.target.checked)  
    console.log(acceptTnc)
    }
  return (
    <Box>
        <Box>
            <FormControlLabel label="I Accept terns and condition" control={<Checkbox checked={acceptTnc} onChange={handleChange} /> }  />
        </Box>
        <Box>
            <FormControl>
                <FormControlLabel>Skill</FormControlLabel>
                <FormGroup>
                <FormControlLabel label="HTML" control={<Checkbox  value='html' onChange={handleChange} /> }  />
                <FormControlLabel label="I Accept terns and condition" control={<Checkbox checked={acceptTnc} onChange={handleChange} /> }  />
                <FormControlLabel label="I Accept terns and condition" control={<Checkbox checked={acceptTnc} onChange={handleChange} /> }  />

                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox  