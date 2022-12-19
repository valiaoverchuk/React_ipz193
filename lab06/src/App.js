import './App.css';
import ZtuForm from "./components/ZtuForm";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import NovaPoshtaForm from "./components/NovaPoshtaForm";

function TabPanel(props) {
  const {children, value, index} = props;
  return (
      <div>
        {
          value === index && (
              <p>{children}</p>
          )
        }
      </div>
  )
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
      <div>
        <h1>Basic Forms</h1>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Task 1"/>
          <Tab label="Task 2"/>
        </Tabs>
        <TabPanel value={value} index={0}><ZtuForm /></TabPanel>
        <TabPanel value={value} index={1}><NovaPoshtaForm /></TabPanel>
      </div>
  );
}

export default App;
