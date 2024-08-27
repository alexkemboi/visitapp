import React, { useState } from 'react';
import DataGridPremiumDemo from '../table';

const SystemSetup: React.FC = () => {
    const [parameters, setParameters] = useState<string[]>([]);
    const [selectedParameter, setSelectedParameter] = useState<string>('');
    const [parameterValue, setParameterValue] = useState<string>('');

    const addParameter = () => {
        if (selectedParameter && !parameters.includes(selectedParameter)) {
            setParameters([...parameters, selectedParameter]);
        }
    };

    const saveParametersToDatabase = () => {
        console.log('Parameters saved to the database:', parameters);
    };

    return (
        <div className="p-4 border border-solid overflow-y-scroll h-96">
            <h2 className="text-2xl font-bold mb-4">System Setup</h2>
            <DataGridPremiumDemo />
            <div className="mb-4">
                <label htmlFor="parameter" className="mr-2">Parameter:</label>
                <input type="text" id="parameter" value={selectedParameter} onChange={(e) => setSelectedParameter(e.target.value)} className="border border-gray-300 rounded px-2 py-1" />
                <button onClick={addParameter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2">Add Parameter</button>
            </div>
            <div className="mb-4">
                <label htmlFor="value" className="mr-2">Value   :</label>
                <input type="text" id="value" value={parameterValue} onChange={(e) => setParameterValue(e.target.value)} className="border border-gray-300 rounded px-2 py-1" />
            </div>
            <div className="mb-4"> <button onClick={saveParametersToDatabase} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save Parameters to Database</button></div>


            <table className="border border-solid mt-4 w-full">
                <thead>
                    <tr>
                        <th className="border border-solid px-4 py-2">Parameters</th>
                        <th className="border border-solid px-4 py-2">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {parameters.map((param, index) => (
                        <tr key={index}>
                            <td className="border border-solid px-4 py-2">{param}</td>
                            <td className="border border-solid px-4 py-2">{param}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SystemSetup;
