import React, { useState, useEffect } from 'react';
import './Calculator.css'; // Import your CSS file

function Calculator() {
  const [initial, setInitial] = useState('');
  const [futureValue, setFutureValue] = useState('');
  const [time, setTime] = useState('');
  const [interestRate, setInterestRate] = useState('');

  useEffect(() => {
    const result = Math.pow(1 + interestRate / 100, time);
    setFutureValue(initial * result);
  }, [initial, time, interestRate]);

  return (
    <>
    <h1>Investment Calculator</h1>
    <div className="calculator-container">
      <div className="label-input">
        <label htmlFor="initial">Initial: </label>
        <input type="number" id="initial" value={initial} onChange={(e) => setInitial(parseFloat(e.target.value))} />
      </div>
      <div className="label-input">
        <label htmlFor="time">Time: </label>
        <input type="number" id="time" value={time} onChange={(e) => setTime(parseFloat(e.target.value))} />
      </div>
      <div className="label-input">
        <label htmlFor="interestRate">Interest Rate: </label>
        <input type="number" id="interestRate" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
      </div>
      <div className="result">Future Value: {Math.floor(futureValue)}</div>
    </div>
    </>
  );
}

export default Calculator;
