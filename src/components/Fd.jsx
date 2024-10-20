import React, { useState } from 'react';

const Fd = () => {
  const [investment, setInvestment] = useState(0);
  const [interestRate, setInterestRate] = useState(0.0);
  const [timePeriod, setTimePeriod] = useState(0);

  const calculateReturns = () => {
    const rate = interestRate / 100;
    const amount = investment * Math.pow(1 + rate, timePeriod);
    return amount - investment;
  };

  const totalReturns = calculateReturns();
  const totalValue = investment + totalReturns;

  return (
    <div className="max-w-lg mx-auto md:p-4 px-3 relative top-[60px]  md:top-[90px] bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl md:text-4xl font-bold mb-4"> Calculat Your <span className='text-green-500'>Fixed Diposite</span></h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold ">Total investment</label>
        <input
          type="range"
          min="1000"
          max="1000000"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-right text-blue-600 font-bold">₹ {investment.toLocaleString()}</div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold ">Rate of interest (p.a)</label>
        <input
          type="range"
          min="1"
          max="100"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-right text-green-600 font-bold">{interestRate}%</div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold ">Time period (Years)</label>
        <input
          type="range"
          min="1"
          max="30"
          value={timePeriod}
          onChange={(e) => setTimePeriod(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-right text-indigo-600 font-bold">{timePeriod} years</div>
      </div>
      
      <div className="mb-4">
        <div className="text-gray-700 font-semibold ">Invested amount</div>
        <div className=" font-bold text-green-400">₹ {investment.toLocaleString()}</div>
      </div>

      <div className="mb-4">
        <div className="text-gray-700 font-semibold ">Est. returns</div>
        <div className=" font-bold text-green-400">₹ {totalReturns.toLocaleString()}</div>
      </div>

      <div className="mb-4">
        <div className="text-gray-700 font-semibold ">Total value</div>
        <div className=" font-bold text-green-400">₹ {totalValue.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Fd;
