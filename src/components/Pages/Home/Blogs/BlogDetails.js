import { Button, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import ShareExperience from '../ShareExperience/ShareExperience';
import './BlogDetails.css';

const BlogDetails = () => {
    const { user} = useAuth();

    const { id } = useParams();

    const [blogs, setBlogs] = useState([]);

    // const date = new Date().toLocaleDateString();

    useEffect(() => {
        fetch(`https://travel-talk.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [id]);

    const {handleSubmit, reset } = useForm();

    const onSubmit = data => {
            data.blogs=blogs;
            data.userName=user?.displayName;
            data.email=user?.email;
        axios.post(`https://travel-talk.herokuapp.com/userCompare`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added.Please Check Compare on Dashboard');
                    reset();        
                }
            })
    }

    return (
        <div style={{overflowX:"hidden"}}>
            <Header/>
            <div className='text-center py-4'>
            <div>
                                {
                                    blogs?.name && <form className='custom-form' onSubmit={handleSubmit(onSubmit)}>
                                        <Button className='btn-custom' type="submit" variant="contained">Add to Compare</Button>

                                    </form>
                                }
                            </div>
                <h5 className='py-3'>{blogs?.category} | <span className='text-secondary'>{blogs?.location}</span></h5>
                <h1>{blogs?.name}</h1>
                <div className='d-md-flex justify-content-evenly align-items-center px-3'> 
                <Box sx={{
                                '& > legend': { mt: 2 },
                            }}>
                                <Typography><Rating name="half-rating-read" precision={0.5} size="small" value={Number(blogs?.star)} readOnly />( {blogs?.rating}) </Typography>

                            </Box>
                    <p>Expense: {blogs.cost} &#x9F3;</p>
                </div>
            </div>
            <div>
            <p className='text-center'>( image credit: {blogs.author} )</p>
           
                <img className='img-fluid' src={blogs.image} alt="" />
            </div>
            <div className='col-10 col-md-8 mx-auto p-3 blog-desk bg-light rounded'>
                <div className=''> 
                    <p>By {blogs.author} | <span className='text-secondary'>{blogs.date} | {blogs?.time}</span></p>
                    <hr />
                </div>
                <div>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.description}</p>
                </div>
            </div>
            <hr />
            <div className='text-center'>
                <h4 >Share your Travel experience</h4>
            <ShareExperience/>
            </div>
            <Footer/>
        </div>
    );
};

export default BlogDetails;