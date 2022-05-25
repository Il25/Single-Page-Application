import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../saga/comments/actions";
import { getPosts } from "../../saga/posts/actions";
import Comments from "../comments";
import Pagination from "../pagination";
import "./index.css";

const Posts = () => {
    const dispatch = useDispatch();
    const postsScreen = useSelector(state => state.posts.posts);

    const [commentModal, setCommentModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countOfPosts] = useState(10);
    const lastPostIndex = currentPage * countOfPosts;
    const firstPostIndex = lastPostIndex - countOfPosts;
    const currentPosts = postsScreen.slice(firstPostIndex, lastPostIndex);

    const nextPageOfPosts = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const getPostComments = (id) => {
        setCommentModal(true);
        dispatch(getComments(id));
    };

    return (
        <div className="posts">
            <div className="posts_title">ALL POSTS</div>
            {currentPosts?.map((post, i) => (
                <div onClick={() => getPostComments(post.id)} className="post_screen_title" key={i}>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>
            ))}
            <Pagination
                nextPageOfPosts={nextPageOfPosts} 
                countOfPosts={countOfPosts} 
                totalPosts={postsScreen.length} 
            />
            <Comments commentModal={commentModal} setCommentModal={setCommentModal} />
        </div>
    );
};

export default Posts;