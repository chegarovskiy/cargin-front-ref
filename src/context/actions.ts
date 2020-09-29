

export type ActionsType = {
    type: ACTIONS_TYPES;
    payload?: any;
};

export enum ACTIONS_TYPES {
    'INCREMENT',
    'DECREMENT',
    'CHANGE_IS_HEADER_SEARCH'
}