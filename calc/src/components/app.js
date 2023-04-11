import './App.css';
import React from 'react';
import {useState, useEffect} from 'react'



function App() {
  const [preState, setPreState] = useState("")
const [curState, setCurState] = useState("")
const [input, setInput] = useState("0")
const [operator, setOperator] = useState(null)
const [total, setTotal] = useState(false)

const inputNum = (e) => {};

const equals= (e) => {};

const operatorType = (e) => {};

const minusplus = () => {};

const Percent = () => {};

const reset = () => {};
  return (
    <div className='container'>
      <div className="Wrapper">
        <div className="Screen"></div>
          <div className="btn light-gray" onClick={reset}>AC</div>
          <div className="btn light-gray" onClick={Percent}>DEL</div>
          <div className="btn light-gray" onClick={minusplus}>+</div>
          <div className="btn orange" onClick={operatorType}>0</div>
          <div className="btn" onClick={inputNum}>1</div>
          <div className="btn" onClick={inputNum}>2</div>
          <div className="btn" onClick={inputNum}>-</div>
          <div className="btn orange" onClick={operatorType}>3</div>
          <div className="btn" onClick={inputNum}>4</div>
          <div className="btn" onClick={inputNum}>5</div>
          <div className="btn" onClick={inputNum}>*</div>
          <div className="btn orange" onClick={operatorType}>6</div>
          <div className="btn" onClick={inputNum}>7</div>
          <div className="btn" onClick={inputNum}>8</div>
          <div className="btn" onClick={inputNum}>/</div>
          <div className="btn orange" onClick={operatorType}>9</div>
          <div className="btn" onClick={inputNum}>.</div>
          <div className="btn" onClick={inputNum}>^</div>
          <div className="btn" onClick={equals}>=</div>
          <div className="btn orange" onClick={operatorType}>(</div>
          <div className="btn" onClick={inputNum}>%</div>
          <div className="btn" onClick={inputNum}>,</div>
          <div className="btn" onClick={inputNum}>)</div>
 
        </div>
      </div>
  );
}

export default App;
