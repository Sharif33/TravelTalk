import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const { _id, name, image,category, author , title} = blog;
    return (
        <div>
            <Link style={{textDecoration:"none"}} to={`/blog/${_id}`}> <div className="col rounded text-start">
            <div className="card border-0 h-100">
                    <div>
                            <img style={{ height: "12rem" }} src={image} className="img-fluid w-100 img-blog" alt="" />
                    <div className='p-3'>
                    <h6>{category}</h6>
                    <h5 className="text-dark pt-1">{name}</h5>
                    <p className='text-start text-secondary'>{title}...</p>
                    <hr className="w-25 fw-bold" />
                    <h6 className='text-dark fst-italic fw-light'>By {author}</h6>
                    </div>
                    </div>
                    </div>
            </div> 
            </Link> 
        </div>
    );
};

export default Blog;