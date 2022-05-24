import { actionTypes } from "./actionTypes";

export const setPosts = (data) => {
    return({
        type: actionTypes.SET_POSTS,
        payload: data,
    });
};

export const setPostComments = (data) => {
    return({
        type: actionTypes.SET_POST_COMMENTS,
        payload: data,
    })
}