import React, { useState, useMemo } from 'react';

function SumCalculator() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

const total=useMemo(()=>{
  
})

  const sum = useMemo(() => {
    // Calculate the sum of value1 and value2
    console.log('Calculating sum...');
    return value1 + value2;
  }, [value1,value2]);

  const handleValue1Change = (e) => {
    setValue1(parseInt(e.target.value));
  };

  const handleValue2Change = (e) => {
    setValue2(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <label>
        Enter value 1: 
        <input
          type="number"
          value={value1}
          onChange={handleValue1Change}
        />
      </label>
      <label>
        Enter value 2: 
        <input
          type="number"
          value={value2}
          onChange={handleValue2Change}
        />
      </label>
      <p>Sum of {value1} and {value2} is: {sum}</p>
    </div>
  );
}

export default SumCalculator;
