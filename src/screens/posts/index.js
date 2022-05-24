import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../saga/comments/actions";
import { getPosts } from "../../saga/posts/actions";
import "./index.css";

const Posts = () => {
    const dispatch = useDispatch();
    const postsScreen = useSelector(state => state.posts.posts);
    const postComments = useSelector(state => state.comments.comments);
    console.log(postsScreen, 'postsScreen');
    console.log(postComments, 'postComments');

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getComments());
    }, []);
    
    return (
        <div className="posts">
           <div className="posts_title">ALL POSTS</div>
           {postsScreen?.map((post, i) => (
               <div className="post_screen_title" key={i}>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>
           ))}
        </div>
    );
};

export default Posts;