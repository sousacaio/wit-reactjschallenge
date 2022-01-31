export interface IDashboardData {
    result: IOperations[],
    lengths: {
        sum: number,
        multi: number,
        divs: number,
        subs: number,
    } 
}
export interface IDashboarResult {
    result: IOperations[],
    lengths: {
        sum: number,
        multi: number,
        divs: number,
        subs: number,
    }
}
export interface IOperations {
    _id?: string
    parameters: {
        firstArgument: number,
        secondArgument: number
    };
    operationType?: string,
    result?: number,
    createdAt?: Date,
    updatedAt?: Date
}
