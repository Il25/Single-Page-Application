import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../saga/comments/actions";
import { getPosts } from "../../saga/posts/actions";
import Pagination from "../pagination";
import "./index.css";

const Posts = () => {
    const dispatch = useDispatch();
    const postsScreen = useSelector(state => state.posts.posts);
    const postComments = useSelector(state => state.comments.comments);

    const [currentPage, setCurrentPage] = useState(1);
    const [countOfPosts] = useState(10);
    const lastPostIndex = currentPage * countOfPosts;
    const firstPostIndex = lastPostIndex - countOfPosts;
    const currentPosts = postsScreen.slice(firstPostIndex, lastPostIndex);

    const nextPageOfPosts = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getComments());
    }, []);

    return (
        <div className="posts">
            <div className="posts_title">ALL POSTS</div>
            {currentPosts?.map((post, i) => (
                <div className="post_screen_title" key={i}>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>
            ))}
            <Pagination
                nextPageOfPosts={nextPageOfPosts} 
                countOfPosts={countOfPosts} 
                totalPosts={postsScreen.length} 
            />
        </div>
    );
};

export default Posts;