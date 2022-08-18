import ResponsiveAppBar from './AppBar';
import React, {useEffect} from 'react';
import './App.css';
import RatePopup from './ratePopup';

function App() {

  const [goldRate, setGoldRate] = React.useState('00000'); 
  const [silverRate, setSilverRate] = React.useState('00000'); 

  const [isPopupOpen, setIsPopupOpen] = React.useState(true);

  
  const handleRateChange = () => {
    setGoldRate(localStorage.getItem('goldRate'));
    setSilverRate(localStorage.getItem('silverRate'));
  };
  
  const handleOpenPopup = () => {
    console.log('handleOpenPopup called');
    setIsPopupOpen(true);
    console.log(isPopupOpen);
  };

  useEffect(()=>{
    setIsPopupOpen(true);
  })

  return (
    <>
    <ResponsiveAppBar handleOpenPopup={handleOpenPopup}/>

    <RatePopup status={isPopupOpen} handleRateChange={handleRateChange}/>
    </>
  );
}

export default App;
