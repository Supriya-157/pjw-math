import React, {useEffect,useState} from 'react';
import RatePopup from './ratePopup';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import {GoldWastageChart,JewelleryItems} from './data';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicTable from './AppTable';
import AdbIcon from '@mui/icons-material/Adb';
import SettingsIcon from '@mui/icons-material/Settings';
import { pink } from '@mui/material/colors';
import './App.css';

function App() {

  const [goldRate, setGoldRate] = React.useState(localStorage.getItem('goldRate') != null ? localStorage.getItem('goldRate') : '00000' ); 
  const [silverRate, setSilverRate] = React.useState(localStorage.getItem('silverRate') != null ? localStorage.getItem('silverRate') : '00000' ); 
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);//React.useState(localStorage.getItem('goldRate') != null ? false : true);
  const [state, setState] = useState({weight: undefined});
  const [value, setValue] = React.useState(0);
  const rows = JewelleryItems;
  const wsForGold = GoldWastageChart;

  const [goldRateObj, setGoldRateObj]=useState({
    "75":0,
    "85":0,
    "916":0
  });
  

  
  const handleRateChange = () => {
    setGoldRate(localStorage.getItem('goldRate'));
    setSilverRate(localStorage.getItem('silverRate'));
    setIsPopupOpen(false);   
  };

  
  
  const CustomTabPanel= (props)=> {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const handleOpenPopup = () => {
    console.log('handleOpenPopup called');
    setIsPopupOpen(true);    
    console.log(isPopupOpen);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const handleOnChange = (e)=> {
  console.log(state.weight);
  const weight = e.target.value;
  if(weight.match(/^\d{1,}(\.\d{0,4})?$/))
  {
    setState({weight : e.target.value})
  }else{
    setState({weight : weight.substring(0, weight.length - 1)})
  }
  
 };

const goldRateCard = ()=> {
  const gold24CrtRt = Number(localStorage.getItem('goldRate'));
  const gold916Rt = gold24CrtRt * 22/24;
  const gold85KdmRt = gold24CrtRt * 0.85;
  const gold75Rt = gold24CrtRt * 0.75;
  console.log("before setting rate"+JSON.stringify(goldRateObj));
  setGoldRateObj({
    "75":gold75Rt,
    "85":gold85KdmRt,
    "916":gold916Rt
  });
  console.log("after setting gold rate"+JSON.stringify(goldRateObj));
 //return goldRateObj;

}

  const handleCalculation = ()=> {
        console.log(state.weight);
       // const goldRates = goldRateCard() ; //;goldRateObj
       
      // goldRateCard();
       
        let itemWt = Number(state.weight);
        let itemWastage = 0;
        let itemMaking = 0;
          wsForGold.map(x=>{
              if(itemWt >= x.min && itemWt <= x.max){               
                itemWastage = x.ws;
                itemMaking = x.ws * 1000;
              }    
          });

          rows.filter(y=> y.isGold).map(x=>{
            if(x.touch == 92){
              x.max = Math.round((( itemWt + itemWastage ) * (goldRateObj[916]/10) ) + itemMaking).toLocaleString();               
              x.min = Math.round((( itemWt + (itemWastage - 0.020 )) * (goldRateObj[916]/10) ) + itemMaking).toLocaleString();              
            }else if(x.touch == 85){
              x.max = Math.round((( itemWt + itemWastage ) * (goldRateObj[85]/10) ) + itemMaking).toLocaleString();               
              x.min = Math.round((( itemWt + (itemWastage - 0.020 )) * (goldRateObj[85]/10) ) + itemMaking).toLocaleString();
            }
            else if(x.touch == 75){
              x.max = Math.round((( itemWt + itemWastage ) * (goldRateObj[75]/10) ) + itemMaking).toLocaleString();               
              x.min = Math.round((( itemWt + (itemWastage - 0.020 )) * (goldRateObj[75]/10) ) + itemMaking).toLocaleString();
            } 
            x.ws = itemWastage.toFixed(3);
            x.mc = Math.round(itemMaking).toLocaleString();
          })


  };

  

  

  useEffect(()=>{
    console.log(isPopupOpen);
    goldRateCard();
   // setIsPopupOpen(true);
  },[isPopupOpen])

  return (
    
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                APJW
            </Typography>            
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                            PAVAN JEWELLERY

            </Typography>
            <div style={{display:'inline-block', cursor:'pointer'}} onClick={handleOpenPopup}>
              <SettingsIcon/>              
            </div>
          </Toolbar>
        </Container>
      </AppBar>
        <div className="app-body">      
        <Grid container spacing={2}>
        <Grid item xs={7}>         
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '16ch' }}>
            <Input
              id="weight"
              value={state.weight}
              onChange={handleOnChange}
              name='weight'
              endAdornment={<InputAdornment position="end">gm</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={5} >
          <div className='cal-btn'>
          <Button variant="contained" onClick={()=> handleCalculation()}>Calculate</Button>
          </div>
            
        </Grid>
        </Grid>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Silver"  />
                <Tab label="Gold"  />
                <Tab label="Exchange"  />
            </Tabs>
        </Box>
            <CustomTabPanel value={value} index={0}>
                <BasicTable dataSource={rows.filter(x => !x.isGold)}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <Grid container >
        <Grid item xs={4}> <strong>916:</strong>{Math.round(goldRateObj[916]).toLocaleString()}</Grid> 
        <Grid item xs={4}> <strong>85 :</strong>{Math.round(goldRateObj[85]).toLocaleString()}</Grid> 
        <Grid item xs={4}> <strong>75 :</strong>{Math.round(goldRateObj[75]).toLocaleString()}</Grid> 
        </Grid>
                <BasicTable dataSource={rows.filter(x => x.isGold)}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Exchange
            </CustomTabPanel>
        </div>
        <RatePopup status={isPopupOpen} handleRateChange={handleRateChange}/>
    </div>
  );
}

export default App;
