import {createStore} from "redux";
import {ACTIONS_TYPES, ActionsType} from './actions'
import {initialState} from './types'


export const reducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS_TYPES.INCREMENT:
            return { ...state, counter: state.counter + 1};
        case ACTIONS_TYPES.DECREMENT:
            return { ...state, counter: state.counter - 1};
        case ACTIONS_TYPES.CHANGE_IS_HEADER_SEARCH:
            return { ...state, isHeaderSearched: state.isHeaderSearched = true};
        default:
            return { ...state };
    }
};

export const store = createStore(
    reducer,
    initialState,
);
