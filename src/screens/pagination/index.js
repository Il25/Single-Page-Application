import React from "react";
import "./index.css";

const Pagination = ({ countOfPosts, totalPosts, nextPageOfPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / countOfPosts) ; i++) {
        pageNumbers.push(i);
    };

    return (
        <div className="pagination_page">
            <ul className="pagination_ul">
                {
                    pageNumbers?.map((page, i) => (
                        <li className="pagination_li" key={i}>
                            <a href="#" onClick={() => nextPageOfPosts(page)}>
                                {page}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;