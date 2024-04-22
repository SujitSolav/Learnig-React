import React, {useState} from 'react';

function Bmical() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
  
    const calculateBMI = () => {
      if (weight !== '' && height !== '') {
        const weightInKg = parseFloat(weight);
        const heightInMeters = parseFloat(height) / 100; 
        const calculatedBMI = weightInKg / Math.pow(heightInMeters, 2);
        setBMI(calculatedBMI.toFixed(2));
      }
    };
  
    const handleWeightChange = (e) => {
      setWeight(e.target.value);
    };
  
    const handleHeightChange = (e) => {
      setHeight(e.target.value);
    };
  
    return (
      <div>
        <h1>BMI Calculator</h1>
        <div>
          <label htmlFor="weight">Weight (kg): </label>
          <input type="number" id="weight" value={weight} onChange={handleWeightChange} />
        </div>
        <div>
          <label htmlFor="height">Height (cm): </label>
          <input type="number" id="height" value={height} onChange={handleHeightChange} />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p>Your BMI is: {bmi}</p>}
      </div>
    );
  };
  

export default Bmical;
