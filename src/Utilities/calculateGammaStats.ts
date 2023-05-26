import { GammaStatOptions, WineDataOptions } from "../Types";

export const calculateGammaStats = (wineData: WineDataOptions[]) => {
    const stats: GammaStatOptions = {
        Mean: {},
        Median: {},
        Mode: {},
    };

    wineData.forEach((wine) => {
        const Alcohol = wine.Alcohol as string;
        const Ash = wine.Ash as number;
        const Hue = wine.Hue as number;
        const Magnesium = wine.Magnesium as number;

        const gamma = (Number(Ash) * Number(Hue)) / Number(Magnesium);

        if (!(Alcohol in stats.Mean)) {
            stats.Mean[Alcohol] = [];
        }

        stats.Mean[Alcohol].push(gamma);
    });

    for (const alcoholClass in stats.Mean) {
        const gammaData = stats.Mean[alcoholClass];

        // Calculate mean
        const mean = gammaData.reduce((sum: number, value: number) => sum + Number(value), 0) / gammaData.length;
        stats.Mean[alcoholClass] = mean;

        // Calculate median
        const sortedData = [...gammaData].sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedData.length / 2);
        const median =
            sortedData.length % 2 === 0
                ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
                : sortedData[middleIndex];
        stats.Median[alcoholClass] = median;

        // Calculate mode
        const modeMap: any = {};
        let maxCount = 0;
        let mode = 0;

        gammaData.forEach((value: number) => {
            modeMap[value] = (modeMap[value] || 0) + 1;

            if (modeMap[value] > maxCount) {
                maxCount = modeMap[value];
                mode = value;
            }
        });

        stats.Mode[alcoholClass] = mode;
    }
    return stats;
};
