import { takeEvery, call, put } from "redux-saga/effects";
import { setComments } from "../../redux/comments/actions";
import { actionTypesSaga } from "./actionTypes";

const getComments = async(url) => {
    const response = await fetch(url)
        .then((res)=>res.json())
        .catch((e)=>console.warn("getComments: ", e));
    return response;
};

function* commentsWorker (action) {
    try {
        const result = yield call(getComments, `https://jsonplaceholder.typicode.com/posts/${action.id}/comments`);
        yield put(setComments(result));
    } catch (error) {
        console.warn('commentsWorker: ', error);
    }
};

export function* commentsWatcher () {
    yield takeEvery(actionTypesSaga.GET_COMMENTS, commentsWorker);
};
