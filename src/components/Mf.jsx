import React, { useState } from "react";

const Mf = () => {
    const [totalInvestment, setTotalInvestment] = useState(25000);
    const [returnRate, setReturnRate] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const estReturns =
        totalInvestment * ((1 + returnRate / 100) ** timePeriod - 1);
    const totalValue = totalInvestment + estReturns;

    return (
        <div className="max-w-xl mx-auto relative top-[60px]  md:top-[90px] p-8 bg-white shadow-md rounded-md">
            <h2 className="text-2xl md:text-4xl font-semibold text-green-400 mb-6">
                Mutual Fund Returns Calculator
            </h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Total investment
                    </label>
                    <input
                        type="range"
                        min="1000"
                        max="100000"
                        value={totalInvestment}
                        onChange={(e) => setTotalInvestment(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className="text-right text-teal-600 font-semibold">
                        ₹ {totalInvestment.toLocaleString()}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Expected rate of return (p.a)
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="100"
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
                        Time period(Years)
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

                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-500">Invested amount</p>
                        <p className="text-xl font-bold">₹{totalInvestment.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Expected annual returns</p>
                        <p className="text-xl font-bold">₹{Math.round(estReturns).toLocaleString()}</p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-gray-500">Total value</p>
                    <p className="text-xl font-bold text-green-500">
                        ₹{Math.round(totalValue).toLocaleString()}
                    </p>
                </div>

                <button className="w-full bg-green-500 text-white py-2 rounded-md font-bold hover:bg-green-600">
                    INVEST NOW
                </button>
            </div>
        </div>
    );
};

export default Mf;
