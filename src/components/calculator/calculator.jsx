import React from 'react'
import './calculatorstyles.css'
import { useRef } from 'react'

function Calculator() {

    let box1desc = useRef(null);
    let boxopdesc = useRef(null);
    let inputArr = [];
    let total = 0;
    let op = [];
    let firstIn = true;
    let firstOp = true;


    const resetArr = () => {
        inputArr.length = 0;
    }

    const resetOp  = () => {
        op.length = 0;
    }

    const output = () => {
        return inputArr.join("");
    }

    const completeReset = () => {
        resetArr();
        resetOp();
        total = 0;
        firstIn = true;
        firstOp = true;
        //boxopdesc.current.innerHTML = "";
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

    const getTotal = () => {
        if(firstIn){
            total = Number(output());
            resetArr();
            firstIn = false;
        }
    }

    const displayTotal = () => {
        box1desc.current.innerHTML = total.toString();
        resetArr();
    }

    const checkArrLen = () => {
        if(inputArr.length < 15){
            return true;
        }else{
            return false;
        }
    }

    const checkArrLenDec = () => {
        if(inputArr.length < 14){
            return true;
        }else{
            return false;
        }
    }

    const showOp = (ope) => {
        switch(ope){
            case 1:
                boxopdesc.current.innerHTML = "+"
                break;
            case 2:
                boxopdesc.current.innerHTML = "-"
                break;
            case 3:
                boxopdesc.current.innerHTML = "*"
                break;
            case 4:
                boxopdesc.current.innerHTML = "÷"
                break;
            default:
                boxopdesc.current.innerHTML = "error"
        }
    }

    
    const compute = (op) => {
        switch(op){
            case 1:
                total += Number(output());
                displayTotal();
                break;
            case 2:
                total -= Number(output());
                displayTotal();
                break;
            case 3:
                total *= Number(output());
                displayTotal();
                break;
            case 4:
                total /= Number(output());
                displayTotal();
                break;
            default:
                box1desc.current.innerHTML = "error";
        }
    }


    const input = (key) => {
        switch(key){
            case '1': 
                if(checkArrLen()){
                    inputArr.push('1')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '2': 
                if(checkArrLen()){
                    inputArr.push('2')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '3': 
                if(checkArrLen()){
                    inputArr.push('3')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '4': 
                if(checkArrLen()){
                    inputArr.push('4')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '5': 
                if(checkArrLen()){
                    inputArr.push('5')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '6': 
                if(checkArrLen()){
                    inputArr.push('6')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '7': 
                if(checkArrLen()){
                    inputArr.push('7')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '8': 
                if(checkArrLen()){
                    inputArr.push('8')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '9': 
                if(checkArrLen()){
                    inputArr.push('9')
                    box1desc.current.innerHTML = output();
                }
                break;
            case '0': 
                if(checkArrLen()){
                    inputArr.push('0')
                    box1desc.current.innerHTML = output();
                }
                break;
            case 'add': 
                if(inputArr.length !== 0){
                    op.push(1);
                    //showOp(op[op.length-1]);
                    if(firstOp){
                        firstOp = false;
                        getTotal();
                    }else{
                        compute(op[op.length-2]);
                    }
                }
                break;
            case 'sub': 
                if(inputArr.length !== 0){
                    op.push(2);
                //showOp(op[op.length-1]);
                if(firstOp){
                    firstOp = false;
                    getTotal();
                }else{
                    compute(op[op.length-2]);
                }
                }
            break;
            case 'mul': 
                if(inputArr.length !== 0){
                    op.push(3);
                //showOp(op[op.length-1]);
                if(firstOp){
                    firstOp = false;
                    getTotal();
                }else{
                    compute(op[op.length-2]);
                }
                }
            break;
            case 'div': 
                if(inputArr.length !== 0){
                op.push(4);
                //showOp(op[op.length-1]);
                if(firstOp){
                    firstOp = false;
                    getTotal();
                }else{
                    compute(op[op.length-2]);
                }
            } 
            break;
            case 'equal': 
                if(inputArr.length !== 0){
                    compute(op[op.length-1]);
                    resetOp();
                    firstOp = true;
                }
                break;
            case 'ac': 
                completeReset();
                box1desc.current.innerHTML = output();
                break;
            case 'del': 
                if(inputArr.length !== 0){
                    del()
                    box1desc.current.innerHTML = output();
                }
                break;
            case 'dot': 
                if(checkArrLenDec()){
                    if(checkDec()===true || checkDecCount() === true){
                        box1desc.current.innerHTML = output();
                    }else{
                        inputArr.push('.')
                        box1desc.current.innerHTML = output();
                    }
                }
                break;
            default:
                box1desc.current.innerHTML = 'error';
        }
    }
    return (
        <div className='whole-container'>
            <h1 className='calc-title'>+-+- JET CALCULATOR -+-+</h1>
            <div className='calculator-container'>
                <div className='outer-container'>
                    <div className='inner-container'>
                        <div className='row1'>
                            {/*} <div ref={boxopdesc} className='opbox'>
                                <p></p>
                            </div> */}
                            <div className='box1'>
                                <p ref={box1desc} className='box1desc'>JET Calculator</p>
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