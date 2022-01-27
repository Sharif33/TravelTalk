import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [categories, setCategories] = useState([]);
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
               setCategories(data.blogs);
            } )  
    }, [page]);

    const filterResult = (location) => {
        const result = blogs.filter(currentData => {
            return currentData.location === location;
        });
        setCategories(result);
        // console.log(result)
    }
    return (
        <div className='bg-light'>
            <div className="px-3">
                <div className='row'>
                    <div className='col-4 col-md-2'>
                    <div className='text-center d-block'>
                       <h4 className='pt-3'>Top spot</h4>
                        <button onClick={() => filterResult('Bangladesh')} className='btn btn-warning mx-2 w-100 mb-2'>Bangladesh</button>
                        <button onClick={() => filterResult('Canada')} className='btn btn-warning mx-2 w-100 mb-2'>Canada</button>
                        <button onClick={() => filterResult('France')} className='btn btn-warning mx-2 w-100 mb-2'>France</button>
                        <button onClick={() => filterResult('India')} className='btn btn-warning mx-2 w-100 mb-2'>India</button>

                    </div>
                    </div>
                    <div className='col-8 col-md-10'>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 m-2 g-4">
                    {categories.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        categories.map(blog => <Blog
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
                
            </div>
        </div>
    );
};

export default Blogs;