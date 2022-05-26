import { useState } from 'react';
import Button from "../Button/Button";
import CalculatorScreen from "../CalculatorScreen/CalculatorScreen"
import ClearButton from "../ClearButton/ClearButton";
import './calculatorContainer.css';
import { evaluate } from 'mathjs';

const CalculatorContainer = ()=> {
    const [input, setInput] = useState('');

    const inputAdd = value => {
        setInput(input + value);
    }

    const handleClear = ()=> {
        setInput('');
    }

    const calculateResult = ()=> {
        if (input) {
            setInput(evaluate(input));  
        }else{
            alert('Please enter a value!')
        } 
    }

    return (
        <div className='calculatorContainer'>
            <CalculatorScreen input={input} />
            <div className='row'>
                <Button handleClick={inputAdd}>7</Button>
                <Button handleClick={inputAdd}>8</Button>
                <Button handleClick={inputAdd}>9</Button>
                <Button handleClick={inputAdd}>*</Button>
            </div>
            <div className='row'>
                <Button handleClick={inputAdd}>4</Button>
                <Button handleClick={inputAdd}>5</Button>
                <Button handleClick={inputAdd}>6</Button>
                <Button handleClick={inputAdd}>-</Button>
            </div>
            <div className='row'>
                <Button handleClick={inputAdd}>1</Button>
                <Button handleClick={inputAdd}>2</Button>
                <Button handleClick={inputAdd}>3</Button>
                <Button handleClick={inputAdd}>+</Button>
            </div>
            <div className='row'>
                <Button handleClick={inputAdd}>/</Button>
                <Button handleClick={inputAdd}>0</Button>
                <Button handleClick={inputAdd}>.</Button>
                <Button handleClick={calculateResult}>=</Button>
            </div>
            <div className='row'>
                <ClearButton handleClear={handleClear}>Clear</ClearButton>
            </div>
        </div>
    )

}

export default CalculatorContainer;