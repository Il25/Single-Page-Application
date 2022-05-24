import { actionTypesSaga } from "./actionTypes";

export const getPosts = () => {
    return({
        type: actionTypesSaga.GET_POSTS,
    });
};
