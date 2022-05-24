import { actionTypesSaga } from "./actionTypes";

export const getComments = () => {
    return({
        type: actionTypesSaga.GET_COMMENTS,
    });
};