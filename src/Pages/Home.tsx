import React from 'react';
import { default as data } from '../Data/WineData.json';
import { StatTable } from '../Components';
import { calculateClassWiseStats, calculateGammaStats } from '../Utilities';
import { WineDataOptions } from '../Types';

const Home = () => {
    const wineData: WineDataOptions[] = data;

    const classWiseFlavanoidsStats = calculateClassWiseStats(wineData);
    const classWiseGammaStats = calculateGammaStats(wineData);

    return (
        <center>
            <div>
                <StatTable title="Class-wise Flavanoids Statistics" data={classWiseFlavanoidsStats} />
                <StatTable title="Class-wise Gamma Statistics" data={classWiseGammaStats} />
            </div>
        </center>
    );
};

export default Home;
