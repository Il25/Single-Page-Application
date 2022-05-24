import { spawn } from "redux-saga/effects";
import { commentsWatcher } from "./comments";
import { postsWatcher } from "./posts";
import { usersWatcher } from "./users";

export function* rootSaga () {
    yield spawn(postsWatcher);
    yield spawn(usersWatcher);
    yield spawn(commentsWatcher);
};