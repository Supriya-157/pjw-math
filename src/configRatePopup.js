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
  const PercentFormatCustom = React.forwardRef(function PercentFormatCustom(props, ref) {
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
        prefix="%"
      />
    );
  });
  
  PercentFormatCustom.propTypes = {
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
    Q1: localStorage.getItem('Q1') != null ? localStorage.getItem('Q1') : '430' ,
    Q2: localStorage.getItem('Q2') != null ? localStorage.getItem('Q2') : '530' ,
    Q3: localStorage.getItem('Q3') != null ? localStorage.getItem('Q3') : '630' ,
    oldSilver: localStorage.getItem('oldSilver') != null ? localStorage.getItem('oldSilver') : '28' ,
    silverDiscount: localStorage.getItem('silverDiscount') != null ? localStorage.getItem('silverDiscount') : '4' ,
    depreciation: localStorage.getItem('depreciation') != null ? localStorage.getItem('depreciation') : '10' ,
  });


  const handleClose = () => {    
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
    localStorage.setItem('Q1',values.Q1);
    localStorage.setItem('Q2',values.Q2);
    localStorage.setItem('Q3',values.Q3);
    localStorage.setItem('silverDiscount',values.silverDiscount);
    localStorage.setItem('oldSilver',values.oldSilver);
    localStorage.setItem('depreciation',values.depreciation);
    
     handleClose();
  };
     
  const handleChange = (event) => {
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
        <DialogTitle>Enter per gram Rate</DialogTitle>
        <DialogContent >  
        <Grid container spacing={2}>     
        <Grid item xs={4}>
            <TextField
                label="Anklet"
                fullWidth
                maxLength="3"
                value={values.anklet}
                onChange={handleChange}
                name="anklet"
                id="anklet"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Bracelet"
                fullWidth
                maxLength="3"
                value={values.ldsBracelet}
                onChange={handleChange}
                name="ldsBracelet"
                id="ldsBracelet"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Dollar"
                fullWidth
                maxLength="3"
                value={values.dollar}
                onChange={handleChange}
                name="dollar"
                id="dollar"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Khada"
                fullWidth
                maxLength="3"
                value={values.Khada}
                onChange={handleChange}
                name="Khada"
                id="Khada"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Lakshmi Face Rglr"
                fullWidth
                maxLength="3"
                value={values.lakshmiFaceRglr}
                onChange={handleChange}
                name="lakshmiFaceRglr"
                id="lakshmiFaceRglr"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="lakshmiFaceHM"
                fullWidth
                maxLength="3"
                value={values.lakshmiFaceHM}
                onChange={handleChange}
                name="lakshmiFaceHM"
                id="lakshmiFaceHM"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="diya"
                fullWidth
                maxLength="3"
                value={values.diya}
                onChange={handleChange}
                name="diya"
                id="diya"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Plate"
                fullWidth
                maxLength="3"
                value={values.plate}
                onChange={handleChange}
                name="plate"
                id="plate"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Hollow Idol"
                fullWidth
                maxLength="3"
                value={values.hollowIdol}
                onChange={handleChange}
                name="hollowIdol"
                id="hollowIdol"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Solid Idol"
                fullWidth
                maxLength="3"
                value={values.solidIdol}
                onChange={handleChange}
                name="solidIdol"
                id="solidIdol"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Chatri"
                fullWidth
                maxLength="3"
                value={values.chatri}
                onChange={handleChange}
                name="chatri"
                id="chatri"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Toe/Waist Chain"
                fullWidth
                maxLength="3"
                value={values.toeRing_waistChain}
                onChange={handleChange}
                name="toeRing_waistChain"
                id="toeRing_waistChain"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Gents Ring"
                fullWidth
                maxLength="3"
                value={values.gentsRing}
                onChange={handleChange}
                name="gentsRing"
                id="gentsRing"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Ladies Ring"
                fullWidth
                maxLength="3"
                value={values.LdsRing}
                onChange={handleChange}
                name="LdsRing"
                id="LdsRing"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Bracelet/NeckChain"
                fullWidth
                maxLength="3"
                value={values.gentsBracelet_neckChain}
                onChange={handleChange}
                name="gentsBracelet_neckChain"
                id="gentsBracelet_neckChain"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
       
        <Grid item xs={4}>
            <TextField
                label="Q1/10gm"
                fullWidth
                maxLength="3"
                value={values.Q1}
                onChange={handleChange}
                name="Q1"
                id="Q1"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Q2/10gm"
                fullWidth
                maxLength="3"
                value={values.Q2}
                onChange={handleChange}
                name="Q2"
                id="Q2"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Q3/10gm"
                fullWidth
                maxLength="3"
                value={values.Q3}
                onChange={handleChange}
                name="Q3"
                id="Q3"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="oldSilver/10gm"
                fullWidth
                maxLength="3"
                value={values.oldSilver}
                onChange={handleChange}
                name="oldSilver"
                id="oldSilver"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="silverDiscount"
                fullWidth
                maxLength="3"
                value={values.silverDiscount}
                onChange={handleChange}
                name="silverDiscount"
                id="silverDiscount"  
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        <Grid item xs={4}>
            <TextField
                label="Depreciation"
                fullWidth
                maxLength="3"
                value={values.depreciation}
                onChange={handleChange}
                name="depreciation"
                id="depreciation"  
                InputProps={{
                  inputComponent: PercentFormatCustom,
                }}
                variant="standard"                
              />
        </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )};