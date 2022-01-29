export interface Param {
    a: number,
    b: number,
}

export interface ICalculator {
    sum(parameters: Param): any,
    div(parameters: Param): any,
    multi(parameters: Param): any,
    sub(parameters: Param): any,
}