import { actionTypesSaga } from "./actionTypes";

export const getUsers = (data) => {
    return({
        type: actionTypesSaga.GET_USERS,
        payload: data,
    });
};

export const getUserPosts = (id) => {
    return({
        type: actionTypesSaga.GET_USER_POSTS,
        payload: id,
    });
};