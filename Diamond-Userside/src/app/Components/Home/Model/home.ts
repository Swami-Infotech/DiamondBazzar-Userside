export class Post{
    postType!: number;
    mainCategory!: number;
    subCategory!: number;
    pageNumber!: number;
    pageSize!: number
}

export enum DiamondCategory{
    Natural = 0, // select by dropdown
    LabGrown = 1,
    All = 2
}
export enum SubDiamondType{
    Rough = 0, // BD 1
    All = 2
}

export enum PostTypeSelection{
    Post = 0, // BD 1
    Demand = 1
}