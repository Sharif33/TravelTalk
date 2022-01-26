import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const { _id, name, image, date, author , description} = blog;
    return (
        <div>
            <Link style={{textDecoration:"none"}} to={`/blog/${_id}`}> <div className="col rounded text-center">
            <div className="card shadow h-100">
                    <div>
                            <img style={{ height: "15rem" }} src={image} className="img-fluid w-100" alt="" />
                    <div className='p-3'>
                    <div className="text-center d-md-flex justify-content-between align-items-center">
                            <p className="text-secondary">Post {date}</p>
                            <p className="text-secondary">By {author}</p>     
                    </div>
                    <h5 className="text-dark pt-1">{name}</h5>
                    <p className='text-start text-secondary'>{description.slice(0,199)}...</p>
                    </div>
                    </div>
                    </div>
            </div> 
            </Link> 
        </div>
    );
};

export default Blog;