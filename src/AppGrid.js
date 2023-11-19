import * as React from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";


export default function AppGrid(){
    return (
        <>
         <Grid container spacing={2}>
        <Grid item xs={8}>
         
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
            <Input
              id="standard-adornment-weight"
              endAdornment={<InputAdornment position="end">gm</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <div className='cal-btn'>
          <Button variant="contained">Calculate</Button>
          </div>
            
        </Grid>
    </Grid>
        </>
    )
}