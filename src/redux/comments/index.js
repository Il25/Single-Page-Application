import { actionTypes } from "./actionTypes";

const initialState = {
    comments: [],
};

export function commentsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        default:
            return state;
    };
};
