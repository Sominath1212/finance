import React, { useState } from 'react';

const Rd = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(50000);
    const [rateOfInterest, setRateOfInterest] = useState(6.5);
    const [timePeriod, setTimePeriod] = useState(3);

    const totalMonths = timePeriod * 12;
    const investedAmount = monthlyInvestment * totalMonths;
    const interestFactor = (rateOfInterest / 100) / 12;
    const estReturns = monthlyInvestment * ((Math.pow((1 + interestFactor), totalMonths) - 1) / interestFactor);
    const totalValue = investedAmount + estReturns;

    return (
        <div className="p-6 relative top-[60px] border-[2px]  md:top-[90px] max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold">RD Calculator</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Monthly investment</label>
                    <input
                        type="range"
                        min="1000"
                        max="100000"
                        value={monthlyInvestment}
                        onChange={(e) => setMonthlyInvestment(e.target.value)}
                        className="w-full mt-2"
                    />
                    <p className="text-lg text-green-500 mt-1">₹ {monthlyInvestment}</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Rate of interest (p.a)</label>
                    <input
                        type="range"
                        min="3"
                        max="30"
                        value={rateOfInterest}
                        onChange={(e) => setRateOfInterest(e.target.value)}
                        className="w-full mt-2"
                    />
                    <p className="text-lg text-green-500 mt-1">{rateOfInterest}%</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Time period (Years)</label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        className="w-full mt-2"
                    />
                    <p className="text-lg text-green-500 mt-1">{timePeriod} Years</p>
                </div>

                <div className="flex flex-col  items-end justify-between border-t pt-4">
                    <div className='flex flex-col items-center justify-center'>
                        <p className="text-sm text-green-500 font-semibold">Invested amount</p>
                        <p className="text-xl font-bold">₹{investedAmount.toLocaleString()}</p>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <p className="text-sm text-green-500 font-semibold">Est. returns</p>
                        <p className="text-xl font-bold">₹{estReturns.toLocaleString()}</p>
                    </ div>
                    <div className='flex flex-col items-end justify-center'>
                        <p className="text-sm text-green-500 font-semibold">Total value</p>
                        <p className="text-xl font-bold">₹{totalValue.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rd;
