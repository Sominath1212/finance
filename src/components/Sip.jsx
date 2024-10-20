import React, { useState } from "react";

const Sip = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
    const [returnRate, setReturnRate] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const investedAmount = monthlyInvestment * 12 * timePeriod;
    const estReturns =
        (monthlyInvestment *
            (((1 + returnRate / 100 / 12) ** (12 * timePeriod) - 1) /
                (returnRate / 100 / 12))) *
        (1 + returnRate / 100 / 12);
    const totalValue = investedAmount + estReturns;

    return (
        <div className="max-w-md mx-auto p-6 top-[60px]  md:top-[90px] relative bg-white shadow-md rounded-md">
            <h2 className="text-3xl md:text-4xl text-green-400 font-bold">Calculate Your SIP</h2>
            <div className="flex flex-col space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Monthly investment
                    </label>
                    <input
                        type="range"
                        min="1000"
                        max="1000000"
                        value={monthlyInvestment}
                        onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className="text-right text-teal-600 font-semibold">
                        ₹ {monthlyInvestment.toLocaleString()}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Expected return rate (p.a)
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={returnRate}
                        onChange={(e) => setReturnRate(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className="text-right text-teal-600 font-semibold">
                        {returnRate}%
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Time period (years)
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className="text-right text-teal-600 font-semibold">
                        {timePeriod} Years
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-500">Invested amount</p>
                        <p className="text-xl font-bold">₹{investedAmount.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Est. returns</p>
                        <p className="text-xl font-bold">₹{Math.round(estReturns).toLocaleString()}</p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-gray-500">Total value</p>
                    <p className="text-xl font-bold text-green-500">
                        ₹{Math.round(totalValue).toLocaleString()}
                    </p>
                </div>

                
            </div>
        </div>
    );
};

export default Sip;
