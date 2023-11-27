import React, {useEffect,useState} from 'react';
import RatePopup from './ratePopup';
import ConfigRatePopup from './configRatePopup';
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
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { pink } from '@mui/material/colors';
import './App.css';

function App() {

  const [goldRate, setGoldRate] = React.useState(localStorage.getItem('goldRate') != null ? localStorage.getItem('goldRate') : '00000' ); 
  const [silverRate, setSilverRate] = React.useState(localStorage.getItem('silverRate') != null ? localStorage.getItem('silverRate') : '00000' ); 
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);//React.useState(localStorage.getItem('goldRate') != null ? false : true);
  const [isSilverPopupOpen, setIsSilverPopupOpen] = React.useState(false);
  const [state, setState] = useState({weight: undefined});
  const [value, setValue] = React.useState(0);
  const rows = JewelleryItems;
  const wsForGold = GoldWastageChart;

  const [silverRateObj, setSilverRateObj]=useState({
    "Q1":Number(localStorage.getItem('Q1')),
    "Q2":Number(localStorage.getItem('Q2')),
    "Q3":Number(localStorage.getItem('Q3')),
    "anklet": Number(localStorage.getItem('anklet')),
    "ldsBracelet":Number(localStorage.getItem('ldsBracelet')),
    "dollar": Number(localStorage.getItem('dollar')),
    "Khada": Number(localStorage.getItem('Khada')),
    "lakshmiFaceRglr": Number(localStorage.getItem('lakshmiFaceRglr')),
    "lakshmiFaceHM": Number(localStorage.getItem('lakshmiFaceHM')),
    "diya": Number(localStorage.getItem('diya')),
    "plate": Number(localStorage.getItem('plate')),
    "hollowIdol": Number(localStorage.getItem('hollowIdol')) ,
    "solidIdol": Number(localStorage.getItem('solidIdol')),
    "chatri": Number(localStorage.getItem('chatri')),
    "toeRing_waistChain": Number(localStorage.getItem('toeRing_waistChain')) ,
    "gentsRing": Number(localStorage.getItem('gentsRing')),
    "LdsRing": Number(localStorage.getItem('LdsRing')),
    "gentsBracelet_neckChain": Number(localStorage.getItem('gentsBracelet_neckChain'))

  });

  const [goldRateObj, setGoldRateObj]=useState({
    "75":0,
    "85":0,
    "916":0
  });

  const silverHeaderColumn = [{
    name : 'Item',
    width: 150
  },
  {
    name : 'Per gm',
    width: 45
  },
  {
    name : 'Amount(₹)',
    width: 100
  }];

  const goldHeaderColumn = [{
    name : 'Item',
    width: 80
  },
  {
    name : 'Ws(gm)',
    width: 30
  },
  {
    name : 'Mc(₹)',
    width: 30,
  },
  {
    name : 'Amount(₹)',
    width: 100,
  }];

  const exchangeHeaderColumn = [{
    name : 'Item',
    width: 80
  },
  {
    name : 'Per gm',
    width: 30
  },
  {
    name : 'Amount(₹)',
    width: 100,
  }];
  
  

  
  const handleRateChange = () => {
    setGoldRate(localStorage.getItem('goldRate'));
    setSilverRate(localStorage.getItem('silverRate'));
    setIsPopupOpen(false);   
  };
  const handleConfigRateChange = () => {
    //setGoldRate(localStorage.getItem('goldRate'));
    //setSilverRate(localStorage.getItem('silverRate'));
    setIsSilverPopupOpen(false);   
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
  const handleSilverRate = () => {
    console.log('handleSilverRate called');
    setIsSilverPopupOpen(true);    
    console.log(isSilverPopupOpen);
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

          //FOR GOLD
          rows.map(x=>{
            if(x.isGold && !x.isExchange){
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
            } 
            //for gold exchange
            else if(!x.isGold && x.isExchange){
              if(x.touch == 92){
                x.max = Math.round(itemWt*(localStorage.getItem("goldRate")*(90/1000))).toLocaleString();               
                x.min = 0;  
                x.perGram = Math.round((localStorage.getItem("goldRate")*(90/1000))).toLocaleString();           
              }else if(x.touch == 85){
                x.max = Math.round(itemWt*(localStorage.getItem("goldRate")*(82/1000))).toLocaleString();               
                x.min = 0; 
                x.perGram = Math.round((localStorage.getItem("goldRate")*(82/1000))).toLocaleString(); 
              }
              else if(x.touch == 75){
                x.max = Math.round(itemWt*(localStorage.getItem("goldRate")*(70/1000))).toLocaleString();               
                x.min = 0; 
                x.perGram = Math.round((localStorage.getItem("goldRate")*(70/1000))).toLocaleString();              
              } //for silver exchange
              else if(x.touch == 0){
                x.max = itemWt * Number(localStorage.getItem("oldSilver"));
                x.min = itemWt * 0;
                x.perGram = Number(localStorage.getItem("oldSilver"));
              }
            }
            //for silver (!x.isGold && !x.isExchange)
            else if(!x.isGold && !x.isExchange){
              x.max = itemWt * Number(localStorage.getItem(x.id));
              x.min = itemWt * Number(localStorage.getItem(x.id)-4);
              x.perGram = Number(localStorage.getItem(x.id));
            }
           
            
          });



          



  };

  

  

  useEffect(()=>{
    console.log(isPopupOpen);
    goldRateCard();
   // setIsPopupOpen(true);
  },[isPopupOpen,isSilverPopupOpen])

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
                            PAVAN

            </Typography>
            <div style={{display:'inline-block', cursor:'pointer'}} onClick={handleSilverRate}>
            <BorderColorIcon/>
            </div>
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
                <Tab label="Pledge"  />
            </Tabs>
        </Box>
            <CustomTabPanel value={value} index={0}>
            <Grid container >
        <Grid item xs={4}> <strong>Q1 :</strong><span class="realistic-marker-highlight">{silverRateObj.Q1}</span></Grid> 
        <Grid item xs={4}> <strong>Q2 :</strong><span class="realistic-marker-highlight">{silverRateObj.Q2}</span></Grid> 
        <Grid item xs={4}> <strong>Q3 :</strong><span class="realistic-marker-highlight">{silverRateObj.Q3}</span></Grid> 
        </Grid>
                <BasicTable column={silverHeaderColumn} dataSource={rows.filter(x => !x.isGold && !x.isExchange)}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <Grid container >
        <Grid item xs={4}> <strong>916:</strong><span class="realistic-marker-highlight">{Math.round(goldRateObj[916]).toLocaleString()}</span></Grid> 
        <Grid item xs={4}> <strong>85 :</strong><span class="realistic-marker-highlight">{Math.round(goldRateObj[85]).toLocaleString()}</span></Grid> 
        <Grid item xs={4}> <strong>75 :</strong><span class="realistic-marker-highlight">{Math.round(goldRateObj[75]).toLocaleString()}</span></Grid> 
        </Grid>
        <svg xmlns="//www.w3.org/2000/svg" version="1.1" class="svg-filters" style={{display: "none"}}>
          <defs>
            <filter id="marker-shape">
              <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
            </filter>
          </defs>
        </svg>
                <BasicTable column={goldHeaderColumn} dataSource={rows.filter(x => x.isGold)}/>
            </CustomTabPanel>
            <CustomTabPanel  value={value} index={2}>
            <Grid container >
        <Grid item xs={3}> <strong>oldSilver :</strong><span class="realistic-marker-highlight">{Math.round(localStorage.oldSilver).toLocaleString}</span></Grid> 
        <Grid item xs={3}> <strong>70 :</strong><span class="realistic-marker-highlight">{Math.round(localStorage.goldRate*(70/100)).toLocaleString}</span></Grid> 
        <Grid item xs={3}> <strong>82 :</strong><span class="realistic-marker-highlight">{Math.round(localStorage.goldRate*(82/100)).toLocaleString}</span></Grid> 
        <Grid item xs={3}> <strong>90 :</strong><span class="realistic-marker-highlight">{Math.round(localStorage.goldRate*(90/100)).toLocaleString}</span></Grid> 
        </Grid>
                <BasicTable column={exchangeHeaderColumn} dataSource={rows.filter(x => x.isExchange)}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                pledge data
            </CustomTabPanel>
        </div>
        <RatePopup status={isPopupOpen} handleRateChange={handleRateChange}/>
        <ConfigRatePopup status={isSilverPopupOpen} handleConfigRateChange={handleConfigRateChange}/>
    </div>
  );
}

export default App;
