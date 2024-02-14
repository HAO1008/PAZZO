export interface IProductList {
    id: string | number;
    name: string;
    price: string;
    color: number;
    size: string;
    image: string;
    count: number;
}

export interface IList {
    id: number;
    title: string;
    isActive: boolean;
    enTitle?: string;
    list?: IFooterList[];
}

export interface IShopList {
    id: number;
    name: string;
    discount?: boolean;
    hot?: boolean;
    list?: IShopList[];
}

export interface IFooterList {
    title: string;
    href: string;
}

export interface Iicon {
    id: number;
    name: string;
    img: string;
}

export interface ISizeGuide {
    id: number;
    size: string;
    waist: number;
    hips: number;
    frontCrotch: number;
    backCrotch: number;
    tighWidth: number;
    trouserLength: number;
    trouserCuffWidth: number;
    cuffHeight: number;
    weight: number;
}

export interface IFittingReport {
    id: number;
    name: string;
    height: number;
    weight: number;
    shoulderWidth: string;
    upperBust: number;
    underBust: number;
    waist: number;
    lowerWaist: number;
    circumference: number;
    hips: number;
    bra: string;
    recommended: string;
}

export interface IModelReference {
    id: number;
    height: number;
    weight: number;
    shoulderWidth: number;
    bust: number;
    waist: number;
    hips: number;
    size: string;
}