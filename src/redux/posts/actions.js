import { actionTypes } from "./actionTypes";

export const setPosts = (data) => {
    return({
        type: actionTypes.SET_POSTS,
        payload: data,
    });
};