import { actionTypes } from "./actionTypes";

const initialState = {

};

export function commentsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_COMMENTS:
            return {
                ...state
            }
        default:
            return state;
    };
};