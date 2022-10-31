import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, {useState} from 'react';

function MyCounter(props) {
    const {initial = 0, min = -10, max = 10} = props;
    const [currentValue, setCurrentValue] = useState(initial);

    const handleIncrement = () => {
        if (currentValue < max)
            setCurrentValue(currentValue + 1);
    };

    const handleDecrement = () => {
        if (currentValue > min)
            setCurrentValue(currentValue - 1);
    };

    return (
        <Box sx={{p: 1, border: 1, borderColor: 'grey.500'}}>
            <p>Поточний рахунок: {currentValue}</p>
            <Button variant="contained" onClick={handleIncrement}>+</Button>
            <Button variant="contained" onClick={handleDecrement}>-</Button>
            <Button variant="outlined" onClick={() => setCurrentValue(initial)}>Reset</Button>
        </Box>
    );
}

export default MyCounter;