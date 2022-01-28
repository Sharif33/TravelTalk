import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';
import './AddBlog.css';

const AddBlog = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.isApproved = false;
        data.userName=user?.displayName;
        data.email=user?.email;
        data.date=new Date().toLocaleDateString();
        data.time=new Date().toLocaleTimeString();

        axios.post(`https://travel-talk.herokuapp.com/blogs`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="p-4 col-md-6 mx-auto">
        <div className="shadow p-4 rounded bg-custom">
            <h3 className="text-custom">Blog Added Section</h3>
            <form className='custom-form' onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 100 })} placeholder="Title Name" />
                <select {...register("category", { required: true })}>
                <option>Select Category</option>
                <option value="Adventure">Adventure</option>
                <option value="Food">Food & Festival</option>
                <option value="Culture">Culture</option>
                <option value="Discovery">Discovery</option>
                <option value="Destination">Destinations</option>
                <option value="Camping">Camping</option>
                <option value="Hiking">Hiking</option>
                </select>
                <input {...register("location")} placeholder="Location" />
                <input {...register("author")} placeholder="Author Name" />
                <input {...register("transport")} placeholder="Transport System" />
                <input type="number" {...register("id")} placeholder="ID" /> 
                <input type="number" {...register("cost")} placeholder="Your Expense (by taka)" />
                <input type="number" step="0.1" min='1' max='5' {...register("star")} placeholder="Rating (out of 5)" />
                <input type="number" {...register("rating")} placeholder="Reviews" />
                <input {...register("image")} placeholder="image url" />
                <input {...register("title")} placeholder="Description Title" />
                <textarea {...register("description", { required: true })} placeholder="Description"></textarea>
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    </div>
    );
};

export default AddBlog;