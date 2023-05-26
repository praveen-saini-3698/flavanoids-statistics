import React from 'react';

export const StatTable = ({ title, data }: { title: string, data: any }) => (
    <div style={{ padding: '1em' }}>
        <h2>{title}</h2>
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {Object.keys(data).map((alcoholClass) => (
                        <th key={alcoholClass}>{alcoholClass}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Object.keys(data.Mean).map((measure) => (
                    <tr key={measure}>
                        <td>Class {measure}</td>
                        {Object.keys(data).map((alcoholClass) => (
                            <td key={alcoholClass}>{data[alcoholClass][measure].toFixed(3)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);