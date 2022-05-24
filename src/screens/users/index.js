import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../saga/users/actions";
import "./index.css";

const Users= () => {
    const dispatch = useDispatch();
    const usersScreen = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    
    return (
        <div className="users">
           <div className="users_title">ALL USERS</div>
           {usersScreen?.map((user, i) => (
               <div className="users_screen" key={i}>
                    <p>Name: <i>{user?.name}</i></p>
                    <p>User name: <i>{user?.username}</i></p>
                    <p>Email: <i>{user?.email}</i></p>
                    <p>Phone: <i>{user?.phone}</i></p>
                    <p>Website: <i>{user?.website}</i></p>
                </div>
           ))}
        </div>
    );
};

export default Users;