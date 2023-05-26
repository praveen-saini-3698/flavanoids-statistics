import { ClassStatOptions, ClassWiseStatOptions, WineDataOptions } from "../Types";

export const calculateClassWiseStats = (wineData: WineDataOptions[]) => {
    const classWiseStats: ClassWiseStatOptions = {};

    wineData.forEach((wine) => {
        const Alcohol = wine.Alcohol as string;
        const Flavanoids = wine.Flavanoids as number;

        if (!(Alcohol in classWiseStats)) {
            classWiseStats[Alcohol] = [];
        }

        classWiseStats[Alcohol].push(Flavanoids);
    });

    const stats: ClassStatOptions = {
        Mean: {},
        Median: {},
        Mode: {},
    };

    for (const alcoholClass in classWiseStats) {
        const flavanoidsData = classWiseStats[alcoholClass];

        // Calculate mean
        const mean = flavanoidsData.reduce((sum, value) => sum + Number(value), 0) / flavanoidsData.length;
        stats.Mean[alcoholClass] = mean;

        // Calculate median
        const sortedData = [...flavanoidsData].sort((a, b) => Number(a) - Number(b));
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

        flavanoidsData.forEach((value: number) => {
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