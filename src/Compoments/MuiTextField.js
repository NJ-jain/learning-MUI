import { Password } from "@mui/icons-material";
import { Stack, TextField , InputAdornment } from "@mui/material";
import React from "react";
import{useState} from 'react'
const MuiTextField = () => {

const [values, setValues] = useState('');

    return (
        <div>
            <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                    <TextField label="First Name" variant="outlined" />
                    <TextField label="First Name" variant="filled" />
                    <TextField label="First Name" variant="standard" />
                </Stack>
                <Stack>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="small secondary"
                            size="small"
                            variant="outlined"
                            color="secondary"
                        />
                        {/* <TextField label="First Name" variant='filled' />
                        <TextField label="First Name" variant='standard' /> */}
                    </Stack>
                    
                </Stack>
                     <Stack direction="row" spacing={2}>
                        <TextField label="Form Input" required value={values} onChange={(e) => setValues(e.target.value)} error={!values} helperText={!values ? "Required" : "do not  share your  password with any one"}/>
                        <TextField label="password" type={Password} disabled helperText="do not share your password with anyone" />
                        <TextField label="Read only"  InputProps={{readOnly : true}}/>
                    </Stack>


                    <Stack direction="row" spacing={2}>
                        <TextField label="Amount" InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}/>
                         <TextField label="Weight" InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>
                        }}/>
                        </Stack>
            </Stack>
        </div>
    );
};

export default MuiTextField;
