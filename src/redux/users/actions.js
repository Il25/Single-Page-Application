import { actionTypes } from "./actionTypes";

export const setUsers = (data) => {
    return({
        type: actionTypes.SET_USERS,
        payload: data,
    });
};

export const setUserPosts = (data) => {
    return({
        type: actionTypes.SET_USER_POSTS,
        payload: data,
    });
};