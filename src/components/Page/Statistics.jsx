import React from 'react';
import SubHeader from '../SubHeader';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name: "Assignment-1", value: 59 },
    { name: "Assignment-2", value: 60 },
    { name: "Assignment-3", value: 60 },
    { name: "Assignment-4", value: 60 },
    { name: "Assignment-5", value: 60 },
    { name: "Assignment-6", value: 60 },
    { name: "Assignment-7", value: 60 },
    { name: "Assignment-8", value: 60 },
];

const Statistics = () => {
    return (
        <div className=''>
            <SubHeader>Assignment Analytics</SubHeader>
            <div className='p-10 md:mx-72'>
                <PieChart className='mx-auto' width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;