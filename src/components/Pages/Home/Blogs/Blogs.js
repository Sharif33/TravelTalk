import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://travel-talk.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='bg-light'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                    {blogs.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                            setBlogs={setBlogs}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;