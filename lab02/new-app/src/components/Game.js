import * as React from 'react';
import {Button} from '@mui/material';
import {useState, useRef} from 'react';

function Game() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [number, setNumber] = useState(Math.floor(Math.random() * 1000));
    const [attempts, setAttempts] = useState(0);
    const [checkedNumbers, setCheckedNumbers] = useState([]);
    const [result, setResult] = useState('');
    const checkedNumber = useRef();

    const startGame = () => {
        if (isGameStarted)
            return true;

        setAttempts(0);
        setResult('');
        setCheckedNumbers([]);
        setNumber(Math.floor(Math.random() * 1000));
        setIsGameStarted(true);
        checkedNumber.current.value = null;
    };

    const checkNumber = () => {
        const checkedNumberVal = +checkedNumber.current.value;
        if (checkedNumberVal < 0 || checkedNumberVal > 1000 || !Number.isInteger(checkedNumberVal)) {
            alert("INVALID INPUT");
            return false;
        }
        setAttempts(attempts + 1);
        if (checkedNumberVal !== number) {
            if (attempts === 9) {
                setResult("GAME OVER! NUMBER: " + number);
                setIsGameStarted(false);
            }
            setCheckedNumbers(checkedNumbers.concat(checkedNumberVal));
        } else {
            setResult("GOOD JOB!");
            setIsGameStarted(false);
        }
    };

    return (
        <>
            <Button onClick={startGame} disabled={isGameStarted}>New game</Button>
            <input id="number" type="number" disabled={!isGameStarted} ref={checkedNumber}/>
            <Button onClick={checkNumber} disabled={!isGameStarted}>Check</Button>
            <div>
                <p>Information: </p>
                {checkedNumbers.map(n =>
                    <p key={n}>
                        Ваше число невірно. Воно {n > number ? "менше" : "більше"} ніж {n}
                    </p>
                )}
            </div>
            <div>
                <p>Attempts:<span
                    style={{fontSize: '1.2rem', color: 'blue', fontWeight: 'bold'}}>{checkedNumbers.length}</span></p>
                <p>Result: {result}</p>
            </div>
        </>
    );
}

export default Game;
