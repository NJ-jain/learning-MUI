import { Button, IconButton, Stack , ButtonGroup , ToggleButton , ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from "react";
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
const Muibutton = () => {

    const [formats, setFormats] = useState([]);
    const formatChange = (event, newFormats) => {
        setFormats(newFormats);
    };
    
    console.log(formats)

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https:// www.google.com">
          {" "}
          Test
        </Button>
        <Button variant="contained"> contained</Button>
        <Button variant="outlined"> outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary"> Primary</Button>
        <Button variant="contained" color="secondary"> Secondary</Button>
        <Button variant="contained" color="error"> Error</Button>
        <Button variant="contained" color="warning"> Warning</Button>
        <Button variant="contained" color="info"> Info</Button>
        <Button variant="contained" color="success"> Success</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary"> Primary</Button>
        <Button variant="text" color="secondary"> Secondary</Button>
        <Button variant="text" color="error"> Error</Button>
        <Button variant="text" color="warning"> Warning</Button>
        <Button variant="text" color="info"> Info</Button>
        <Button variant="text" color="success"> Success</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary"> Primary</Button>
        <Button variant="outlined" color="secondary"> Secondary</Button>
        <Button variant="outlined" color="error"> Error</Button>
        <Button variant="outlined" color="warning"> Warning</Button>
        <Button variant="outlined" color="info"> Info</Button>
        <Button variant="outlined" color="success"> Success</Button>
      </Stack>
      <Stack spacing={2} display="block" direction="row">
      <Button variant="contained"  size="small"> Primary</Button>
        <Button variant="contained" size="medium"> Secondary</Button>
        <Button variant="contained" size="large"> Error</Button>

      </Stack>
      <Stack spacing={2} display= "block" direction="row">
        <Button variant="contained" color="primary" startIcon={<SendIcon/>} disableRipple>send</Button>
        <Button variant="contained" color="primary" endIcon={<SendIcon/>} disableElevation>send</Button>
        <IconButton onClick={()=> alert("dkfb")} aria-label="send" color="success" size="small">
            <SendIcon/>
        </IconButton>
      </Stack>



      <Stack direction="row ">
        <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="align">

        <Button onClick={()=> alert("dkfb")} >Left</Button>
        <Button >Center</Button>
        <Button >Right</Button>


        </ButtonGroup>
     
      </Stack>

<Stack direction="row">
    <ToggleButtonGroup aria-label="Toggled button Group" value={formats} onChange={formatChange} >
        <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon/></ToggleButton>
        <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon/></ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
    </ToggleButtonGroup>
</Stack>

    </Stack>
    
  );
};

export default Muibutton;
