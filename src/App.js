import ResponsiveAppBar from './AppBar';
import React, {useEffect} from 'react';
import './App.css';
import RatePopup from './ratePopup';
import AppTab from './AppTab';
import AppGrid from './AppGrid';


function App() {

  const [goldRate, setGoldRate] = React.useState(localStorage.getItem('goldRate') != null ? localStorage.getItem('goldRate') : '00000' ); 
  const [silverRate, setSilverRate] = React.useState(localStorage.getItem('silverRate') != null ? localStorage.getItem('silverRate') : '00000' ); 

  const [isPopupOpen, setIsPopupOpen] = React.useState(localStorage.getItem('goldRate') != null ? false : true);

  
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
  },[isPopupOpen])

  return (
    <>
    <ResponsiveAppBar handleOpenPopup={handleOpenPopup}/>
    <div className="app-body">
   
    <AppGrid/>
      <AppTab/>
    </div>  

    <RatePopup status={isPopupOpen} handleRateChange={handleRateChange}/>
    </>
  );
}

export default App;
