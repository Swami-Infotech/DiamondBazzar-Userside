export class Post{
    postType!: number;
    mainCategory!: number;
    subCategory!: number;
    pageNumber!: number;
    pageSize!: number
}

export enum DiamondCategory{
    Natural,
    LabGrown,
    All
}
export enum SubDiamondType{
    Rough,
    Polish,
    All
}

export enum PostTypeSelection{
    Post,
    Demand
}