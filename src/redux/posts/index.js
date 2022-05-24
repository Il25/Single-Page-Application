import { actionTypes } from "./actionTypes";

const initialState = {

};

export function postsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_POSTS:
            return {
                ...state
            }
        default:
            return state;
    };
};