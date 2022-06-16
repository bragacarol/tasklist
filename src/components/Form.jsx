import React from 'react';
import { TextField, Paper, Button } from '@mui/material';

export default function Form() {

  return (
    <Paper>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Button variant="contained">Contained</Button>
   </Paper>
  )
}
