export class Demand{
    name!: string;
    category!: string;
    piece!: number;
    size!: number;
    clarity!: string;
    color!: string;
    imageUrl!: string;
}

export class Post{
    postType!: number;
    mainCategory!: number;
    subCategory!: number;
    pageNumber!: number;
    pageSize!: number
}

export enum DiamondCategory{
    Natural = 0,
    LabGrown = 1,
    All = 2
}
export enum SubDiamondType{
    Rough = 0,
    Polish = 1,
    All = 2
}

export enum PostTypeSelection{
    Post = 0,
    Demand = 1
}