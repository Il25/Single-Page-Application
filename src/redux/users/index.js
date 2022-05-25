import { actionTypes } from "./actionTypes";

const initialState = {
    users: [],
    userPosts: [],
};

export function usersReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case actionTypes.SET_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload,
            }    
        default:
            return state;
    };
};
