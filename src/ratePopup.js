import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';




const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="₹"
      />
    );
  });
  
  NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default function FormDialog(props) {
   
  const [open, setOpen] = React.useState(props.status);
  const [isSaveBtnClicked,setIsSaveBtnClicked]=React.useState(false);
  const [values, setValues] = React.useState(
    {    
    silverRate: '',
    goldRate:'',
    silverRateHelperText:'',
    goldRateMaxLength:true,
    silverRateMaxLength:true,
    goldRateHelperText:''    
  });

  // const handleClickOpen = () => {
  //   setOpen(true);
  //   props.status = true;
  // };

  const handleClose = () => {
    setOpen(false);
   // props.status = false;
    
    props.handleRateChange();
  };

  const handleSave = () => {
    console.log("values=="+values);
    setIsSaveBtnClicked(true);
    if(values.silverRate !== '' && values.goldRate !== ''){
    
        setValues({
            ...values,
            ['goldRateHelperText']:'',
            ['silverRateHelperText']:''    
          });
          localStorage.setItem('goldRate',values.goldRate);
          localStorage.setItem('silverRate',values.silverRate);
          handleClose();
    }
    else if(values.silverRate === ''){
             setValues({
            ...values,
            ['silverRateHelperText']:'Enter Silver Rate'            
          });
    }
    else if(values.goldRate === ''){
        console.log('in else if gold');

        setValues({
            ...values,
            ['goldRateHelperText']:'Enter Gold Rate'            
          });
    }
    else {     

        setValues({
            ...values,
            [values.silverRateHelperText]:'Enter Silver Rate',
            [values.goldRateHelperText]:'Enter Gold Rate'            
          });
    }
    
  };
  

  

  
  const handleChange = (event) => {
    if(event.target.value.length >= 6){
        //setIsSaveBtnClicked(true);
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            [event.target.name+'HelperText']: 'Max 5 digits allowed',
            [event.target.name+'MaxLength']: true
            
          });
      //  return true;
    }
    else {
     setValues({
      ...values,
      [event.target.name]: event.target.value,
      [event.target.name+'HelperText']: '',
      [event.target.name+'MaxLength']: false
    });
}
   
  };
  
  return (
    <div>      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter the Rate</DialogTitle>
        <DialogContent >       
        
      <TextField
        label="Gold Rate"
        fullWidth
        maxLength="5"
        value={values.goldRate}
        onChange={handleChange}
        name="goldRate"
        id="goldRate"  
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="standard"
        helperText={values.goldRateHelperText}
        error={(isSaveBtnClicked && values.goldRate == '') || (values.goldRateMaxLength && values.goldRate.length >= 6) ? true : false }
      />
      <TextField
      fullWidth
        label="Silver Rate"
        sx={{mt:2}}
        value={values.silverRate}
        onChange={handleChange}
        name="silverRate"
        id="silverRate"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="standard"
        helperText={values.silverRateHelperText}
        error={isSaveBtnClicked && values.silverRate == '' || values.silverRateMaxLength && values.silverRate.length >= 6 ? true : false }
        maxLength="6"

      />  


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={values.silverRateMaxLength === true ||   values.goldRateMaxLength === true} onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
