import React,{useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Grid } from '@mui/material';




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
    anklet: localStorage.getItem('anklet') != null ? localStorage.getItem('anklet') : '58' ,
    ldsBracelet:localStorage.getItem('ldsBracelet') != null ? localStorage.getItem('ldsBracelet') : '120',
    dollar: localStorage.getItem('dollar') != null ? localStorage.getItem('dollar') : '140' ,
    Khada: localStorage.getItem('Khada') != null ? localStorage.getItem('Khada') : '75' ,
    lakshmiFaceRglr: localStorage.getItem('lakshmiFaceRglr') != null ? localStorage.getItem('lakshmiFaceRglr') : '75' ,
    lakshmiFaceHM: localStorage.getItem('lakshmiFaceHM') != null ? localStorage.getItem('lakshmiFaceHM') : '80' ,
    diya: localStorage.getItem('diya') != null ? localStorage.getItem('diya') : '80' ,
    plate: localStorage.getItem('plate') != null ? localStorage.getItem('plate') : '80' ,
    hollowIdol: localStorage.getItem('hollowIdol') != null ? localStorage.getItem('hollowIdol') : '75' ,
    solidIdol: localStorage.getItem('solidIdol') != null ? localStorage.getItem('solidIdol') : '75' ,
    chatri: localStorage.getItem('chatri') != null ? localStorage.getItem('chatri') : '75' ,
    toeRing_waistChain: localStorage.getItem('toeRing_waistChain') != null ? localStorage.getItem('toeRing_waistChain') : '60' ,
    gentsRing: localStorage.getItem('gentsRing') != null ? localStorage.getItem('gentsRing') : '120' ,
    LdsRing: localStorage.getItem('LdsRing') != null ? localStorage.getItem('LdsRing') : '140' ,
    gentsBracelet_neckChain: localStorage.getItem('gentsBracelet_neckChain') != null ? localStorage.getItem('gentsBracelet_neckChain') : '110' ,
  });

  // const handleClickOpen = () => {
  //   setOpen(true);
  //   props.status = true;
  // };

  const handleClose = () => {
    //setOpen(false);
   // props.status = false;
    
    props.handleConfigRateChange();
  };

  const handleSave = () => {
    console.log("values=="+values);
    setIsSaveBtnClicked(true);
    localStorage.setItem('anklet',values.anklet);
    localStorage.setItem('ldsBracelet',values.ldsBracelet);
    localStorage.setItem('dollar',values.dollar);
    localStorage.setItem('Khada',values.Khada);
    localStorage.setItem('lakshmiFaceRglr',values.lakshmiFaceRglr);
    localStorage.setItem('lakshmiFaceHM',values.lakshmiFaceHM);
    localStorage.setItem('diya',values.diya);
    localStorage.setItem('plate',values.plate);
    localStorage.setItem('hollowIdol',values.hollowIdol);
    localStorage.setItem('solidIdol',values.solidIdol);
    localStorage.setItem('chatri',values.chatri);
    localStorage.setItem('toeRing_waistChain',values.toeRing_waistChain);
    localStorage.setItem('gentsRing',values.gentsRing);
    localStorage.setItem('LdsRing',values.LdsRing);
    localStorage.setItem('gentsBracelet_neckChain',values.gentsBracelet_neckChain);
    
     handleClose();
  };
    /*if(values.silverRate !== '' && values.goldRate !== ''){
    
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
  */

  

  
  const handleChange = (event) => {
        //setIsSaveBtnClicked(true);
        setValues({
            ...values,
            [event.target.name]: event.target.value,
                  }); 
  };

  useEffect(() => {
    //setOpen(true);
  }, [])
  
  return (
    <div>      
      <Dialog open={props.status} onClose={handleClose}>
        <DialogTitle>Enter the Rate</DialogTitle>
        <DialogContent >       
        <Grid>
            <input type="number" name="anklet" value={values.anklet} onChange={handleChange}></input>
        </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )};