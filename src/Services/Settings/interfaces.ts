export interface ISettings {
    _id?: string | null
    logStatus: boolean
}
export interface ISettingsReturn {
    _id?: string | null
    logStatus: boolean,
    createdAt: Date,
    updatedAt: Date
}