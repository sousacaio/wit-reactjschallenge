export type Parameter = string | Blob 
export interface Param {
    a: any,
    b: any,
}
export interface CalculateOperation {
    execute(parameters: Param, operationType: string): Promise<void>,
}