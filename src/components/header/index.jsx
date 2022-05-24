import React from "react";
import "./index.css"
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <header className="header">
            <div className="header_navigation">
                <ul>
                    <li>   
                        <Link to="/">
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            Users
                        </Link>
                    </li>
                </ul>    
            </div>
        </header>   
    );
};

export default Header;