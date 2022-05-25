import { actionTypesSaga } from "./actionTypes";

export const getUsers = () => {
    return({
        type: actionTypesSaga.GET_USERS,
    });
};

export const getUserPosts = (id) => {
    return({
        type: actionTypesSaga.GET_USER_POSTS,
        id,
    });
};
