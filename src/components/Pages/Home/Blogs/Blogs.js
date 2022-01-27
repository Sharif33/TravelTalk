import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage]=useState(0);
    const [pageCount, setPageCount]=useState(0);
    const size = 10;

    useEffect(() => {
        fetch(`https://travel-talk.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                   setBlogs(data.blogs)
                   const count = data.count;
               const pageNumber = Math.ceil(count/size);
               setPageCount(pageNumber);
            } )  
    }, [page])
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
                <div className='text-center my-4'>
                    {
                        [...Array(pageCount).keys()].map(number=> <button className={number == page ? 'selected' : 'pagibtn'} key={number} onClick={()=>setPage(number)}>{number+1}</button>)
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;