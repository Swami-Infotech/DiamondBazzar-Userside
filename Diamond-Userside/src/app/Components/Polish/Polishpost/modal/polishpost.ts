export class Shap{
    imageUrl!:string;
    Name!:string;
    isActive!:boolean
}
export class size{
    color!:string;
    isActive!:boolean 
}
export class Size{
    Number!:number;
    cla!:string;
    Colors!:string;
    facny!:string
    isActive!:boolean 
}

export class TextSize{
    name!:string;
    Colors!:string
}

export enum displayType {
    Dropdown = 0,
    SelectionListHorizontal,
    NumberInput,
    TextInput,
    ShapeSelection,
    SpecialRequirements,
    DiamondType,
    YesOrNoSelection,
    MultipleInputHorizontal,
    MultipleInputVertical,
    CategorySelection,
    SquareCategory,
    PriceInput,
    PriceInputRange,
    TextHeader
}