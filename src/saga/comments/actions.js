import { actionTypesSaga } from "./actionTypes";

export const getComments = (id) => {
    return({
        type: actionTypesSaga.GET_COMMENTS,
        id,
    });
};
