import * as React from 'react';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);

  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Students"  value="/" component={Link} to="/"/>
        <Tab label="Add Student" value="/add" component={Link} to="/add"/>
        <Tab label="Update" value="/update" component={Link} to="/update"/>
      </Tabs>
    </Box>
  );
}