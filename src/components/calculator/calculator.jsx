import React from 'react'
import './calculatorstyles.css'
import { useRef } from 'react'

function Calculator() {

    let box1desc = useRef(null);
    let inputArr = [];
    const output = () => {
        return inputArr.join("");
    }

    const completeReset = () => {
        inputArr.length = 0;
    }
    
    const del = () => {
        inputArr.pop();
    }
    
    const checkDecCount = () => {
        for(let i = 0; i <= inputArr.length; i++){
            if(inputArr[i] === '.'){
                return true;
            }
        }
        return false;
    }

    const checkDec = () => {
        if(inputArr.length === 0){
            return true;
        }else if(inputArr[inputArr.length-1] === '.'){
            return true;
        }else{
            return false;
        }
    }

    const input = (key) => {
        switch(key){
            case '1': 
            inputArr.push('1')
            box1desc.current.innerHTML = output();
            break;
            case '2': 
            inputArr.push('2')
            box1desc.current.innerHTML = output();
            break;
            case '3': 
            inputArr.push('3')
            box1desc.current.innerHTML = output();
            break;
            case '4': 
            inputArr.push('4')
            box1desc.current.innerHTML = output();
            break;
            case '5': 
            inputArr.push('5')
            box1desc.current.innerHTML = output();
            break;
            case '6': 
            inputArr.push('6')
            box1desc.current.innerHTML = output();
            break;
            case '7': 
            inputArr.push('7')
            box1desc.current.innerHTML = output();
            break;
            case '8': 
            inputArr.push('8')
            box1desc.current.innerHTML = output();
            break;
            case '9': 
            inputArr.push('9')
            box1desc.current.innerHTML = output();
            break;
            case '0': 
            inputArr.push('0')
            box1desc.current.innerHTML = output();
            break;
            case 'add': 
            box1desc.current.innerHTML = output();
            break;
            case 'sub': 
            box1desc.current.innerHTML = output();
            break;
            case 'div': 
            box1desc.current.innerHTML = output();
            break;
            case 'mul': 
            box1desc.current.innerHTML = output();
            break;
            case 'equal': 
            box1desc.current.innerHTML = output();
            break;
            case 'ac': 
            completeReset();
            box1desc.current.innerHTML = output();
            break;
            case 'del': 
            del()
            box1desc.current.innerHTML = output();
            break;
            case 'dot': 
            if(checkDec()===true || checkDecCount() === true){
                box1desc.current.innerHTML = output();
            }else{
                inputArr.push('.')
                box1desc.current.innerHTML = output();
            }
            break;
            default:
                box1desc.current.innerHTML = 'error';
        }
    }
    return (
        <div className='whole-container'>
            <h1 className='calc-title'>+-+- JET Calculator -+-+</h1>
            <div className='calculator-container'>
                <div className='outer-container'>
                    <div className='inner-container'>
                        <div className='row1'>
                            <div className='box1'>
                                <p ref={box1desc}>this is the output</p>
                            </div>
                        </div>
                        <div className='row2'>
                            <div className='row2-1'>
                                <div className='boxes' onClick={()=>{input('ac')}}>AC</div>
                            </div>
                            <div className='row2-2'>
                                <div className='boxes' onClick={()=>{input('del')}}>DEL</div>
                                <div className='boxes' onClick={()=>{input('add')}}>+</div>
                            </div>
                        </div>
                        <div className='row3'>
                            <div className='boxes' onClick={()=>{input('1')}}>1</div>
                            <div className='boxes' onClick={()=>{input('2')}}>2</div>
                            <div className='boxes' onClick={()=>{input('3')}}>3</div>
                            <div className='boxes' onClick={()=>{input('mul')}}>*</div>
                        </div>
                        <div className='row4'>
                            <div className='boxes' onClick={()=>{input('4')}}>4</div>
                            <div className='boxes' onClick={()=>{input('5')}}>5</div>
                            <div className='boxes' onClick={()=>{input('6')}}>6</div>
                            <div className='boxes' onClick={()=>{input('div')}}>÷</div>
                        </div>
                        <div className='row5'>
                            <div className='boxes' onClick={()=>{input('7')}}>7</div>
                            <div className='boxes' onClick={()=>{input('8')}}>8</div>
                            <div className='boxes' onClick={()=>{input('9')}}>9</div>
                            <div className='boxes' onClick={()=>{input('sub')}}>-</div>
                        </div>
                        <div className='row6'>
                            <div className='row6-1'>
                                <div className='boxes' onClick={()=>{input('dot')}}>.</div>
                                <div className='boxes' onClick={()=>{input('0')}}>0</div>
                            </div>
                            <div className='row6-2'>
                                <div className='boxes' onClick={()=>{input('equal')}}>=</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;