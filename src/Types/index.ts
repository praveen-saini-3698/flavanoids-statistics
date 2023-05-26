export type WineDataOptions = {
    "Alcohol": string | number;
    "Malic Acid": string | number;
    "Ash": string | number;
    "Alcalinity of ash": string | number;
    "Magnesium": string | number;
    "Total phenols": string | number;
    "Flavanoids": string | number;
    "Nonflavanoid phenols": string | number;
    "Proanthocyanins": string | number;
    "Color intensity": string | number;
    "Hue": string | number;
    "OD280/OD315 of diluted wines": string | number;
    "Unknown": string | number;
}

export type ClassStatOptions = {
    Mean: { [key: string]: number };
    Median: { [key: string]: number };
    Mode: { [key: string]: number };
};

export type GammaStatOptions = {
    Mean: { [key: string]: number[] | any };
    Median: { [key: string]: number[] | any };
    Mode: { [key: string]: number[] | any };
};


export type ClassWiseStatOptions = {
    [key: string]: number[];
};