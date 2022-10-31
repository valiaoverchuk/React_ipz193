import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import Counters from "./components/Counters";
import {counters} from "./data/countersList";
import {products} from "./data/products";
import Game from "./components/Game";
import Cart from "./components/Cart";

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
          <h1>Props, state, events</h1>
          <Tabs value={value} onChange={handleChange}>
              <Tab label="Task 1"/>
              <Tab label="Task 2"/>
              <Tab label="Task 3"/>
          </Tabs>
          <TabPanel value={value} index={0}><Counters data={counters}/></TabPanel>
          <TabPanel value={value} index={1}><Cart data={products}/></TabPanel>
          <TabPanel value={value} index={2}><Game /></TabPanel>
      </div>
  );
}

export default App;
