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
        <div style={{overflowX:"hidden"}} className='bg-light'>
            <div className="">
                <div className='row'>
                    <div className='col-4 col-md-2 bg-dark'>
                    <div className='text-center d-block'>
                       <h4 className='pt-3 text-light'>Top spot</h4> <hr className='text-light'/>
                        <h6 style={{cursor:"pointer"}} onClick={() => filterResult('Bangladesh')} className='text-warning mb-2'>Bangladesh</h6>
                        <h6 style={{cursor:"pointer"}} onClick={() => filterResult('Canada')} className='text-warning mb-2'>Canada</h6>
                        <h6 style={{cursor:"pointer"}} onClick={() => filterResult('France')} className='text-warning mb-2'>France</h6>
                        <h6 style={{cursor:"pointer"}} onClick={() => filterResult('India')} className='text-warning mb-2'>India</h6>
                        <h6 style={{cursor:"pointer"}} onClick={() => setCategories(blogs)} className='text-info mb-2'>See all</h6>
                    </div>
                    </div>
                    <div className='col-8 col-md-10 text-center'>
                        <h4 className='pt-3'>Travelers Experience</h4> <hr />
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-2 g-4">
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