export class AddSupportModel{
    supportTypeID!:number
    userID!:number
    supportTitle!:string
    supportDescription!:string
    attachement!:string
}

export enum diamondCategory{
    Natural = 0,
    LabGrown = 1,
}
export enum diamondSubCategory{
    Rough = 0 ,
    Polish = 1,
}

export enum PostTypeSelection{
    Post = 0,
    Demand = 1
}
