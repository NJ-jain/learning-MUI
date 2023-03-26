import { Box, FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'

const MuiSwitch = () => {
  return (
    <div>

<Box>
<Switch  aria-label='Switch demo' defaultChecked />
<Switch  aria-label='Switch demo' />
<Switch  aria-label= 'Switch demo' disabled defaultChecked />
<Switch  aria-label= 'Switch demo' disabled />
</Box>

<Box>
<FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
</Box>
    </div>
  )
}

export default MuiSwitch