import { actionTypes } from "./actionTypes";

const initialState = {

};

export function usersReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return {
                ...state
            }
        default:
            return state;
    };
};