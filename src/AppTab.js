import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicTable from './AppTable';
import {JewelleryItems} from './data';


  function CustomTabPanel(props) {
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
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  

const rows = JewelleryItems;


function AppTab(){

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return(
        <>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Silver">Test</Tab>
                <Tab label="Gold"  />
                <Tab label="Exchange"  />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <BasicTable dataSource={rows.filter(x => !x.isGold)}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <BasicTable dataSource={rows.filter(x => x.isGold)}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Exchange
            </CustomTabPanel>
        </>
    )
}

export default AppTab;