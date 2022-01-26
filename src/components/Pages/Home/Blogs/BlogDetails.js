import { Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './BlogDetails.css';

const BlogDetails = () => {
    const { user, admin } = useAuth();

    const { id } = useParams();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://travel-talk.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [id])
    return (
        <div>
            <div className='text-center py-4'>
                <h5 className='py-3'>{blogs?.category} | <span className='text-secondary'>{blogs?.location}</span></h5>
                <h1>{blogs?.name}</h1>
                <div className='d-md-flex justify-content-evenly align-items-center px-3'> 
                <Box sx={{
                                '& > legend': { mt: 2 },
                            }}>
                                <Typography><Rating name="half-rating-read" precision={0.5} size="small" value={Number(blogs?.star)} readOnly />( {blogs?.rating}) </Typography>

                            </Box>
                    <p>Expense: {blogs.cost} tk</p>
                </div>
            </div>
            <div>
            <p className='text-center'>( image credit: {blogs.author} )</p>
                <img className='img-fluid' src={blogs.image} alt="" />
            </div>
            <div className='col-10 col-md-8 mx-auto p-3 blog-desk bg-light rounded'>
                <div className=''> 
                    <p className='fw-bold'>By {blogs.author} | <span className='text-secondary'>{blogs.date}</span></p>
                    <hr />
                </div>
                <div>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;