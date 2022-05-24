import { actionTypes } from "./actionTypes";

const initialState = {
    posts: [],
    postComment: [],
};

export function postsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        case actionTypes.SET_POST_COMMENTS:
            return {
                ...state,
                postComments: action.payload,
            }    
        default:
            return state;
    };
};