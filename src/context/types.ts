
export type AppState = {

}
export interface InitialState {
    counter: number,
    isHeaderSearched: boolean | null
}

export const initialState: InitialState = {
    counter: 1,
    isHeaderSearched: null,

};