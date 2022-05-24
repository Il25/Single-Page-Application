import { actionTypesSaga } from "./actionTypes";

export const getComments = (data) => {
    return({
        type: actionTypesSaga.GET_COMMENTS,
        payload: data,
    });
};