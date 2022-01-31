export interface IDashboard {
    body: {
        result: IOperations[] | null,
        lengths: {
            sum: number,
            multi: number,
            divs: number,
            subs: number,
        } | null
    }
}

export interface IOperations {
    _id: string
    parameters: {
        a: number,
        b: number
    };
    operationType: string,
    result: number
}