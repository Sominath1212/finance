import React, { useState } from 'react';

const Nps = () => {
    const [investment, setInvestment] = useState(10000);
    const [returnRate, setReturnRate] = useState(9);
    const [age, setAge] = useState(20);

    const totalInvestment = investment * 12 * (60 - age);
    const interestEarned = totalInvestment * returnRate * (60 - age) / 100;
    const maturityAmount = totalInvestment + interestEarned;
    const minAnnuityInvestment = maturityAmount * 0.4;

    return (
        <div className="md:p-6 relative top-[60px]  md:top-[90px] max-w-md mx-auto px-3 bg-white rounded-xl shadow-md space-y-2  md:space-y-4">
            <h2 className="text-2xl font-bold">NPS Calculator</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Investment per month</label>
                    <input
                        type="range"
                        min="1000"
                        max="100000"
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                        className="w-full mt-2"
                    />
                    <p className="text-lg text-green-500 mt-1">₹ {investment}</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Expected return (p.a)</label>
                    <input
                        type="range"
                        min="5"
                        max="100"
                        value={returnRate}
                        onChange={(e) => setReturnRate(e.target.value)}
                        className="w-full mt-2 text-green-500"
                    />
                    <p className="text-lg text-green-500 mt-1">{returnRate}%</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Your age</label>
                    <input
                        type="range"
                        min="18"
                        max="60"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full mt-2 text-green-500"
                    />
                    <p className="text-lg text-green-500 mt-1">{age} Yrs</p>
                </div>

                <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">Total investment</p>
                    <p className="text-xl font-bold text-green-500">₹{totalInvestment.toLocaleString()}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-600">Interest earned</p>
                    <p className="text-xl font-bold text-green-500">₹{interestEarned.toLocaleString()}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-600">Maturity amount</p>
                    <p className="text-xl font-bold text-green-500">₹{maturityAmount.toLocaleString()}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-600">Min. annuity investment</p>
                    <p className="text-xl font-bold">₹{minAnnuityInvestment.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Nps;
