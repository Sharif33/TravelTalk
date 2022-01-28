import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth/useAuth';
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
import travel from '../../../images/travel-exp.jpg';
// import { Link } from 'react-router-dom';

const ShareExperience = () => {
    const {user}=useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
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
        <>  
        {/* <Header/> */}
        <div style={{overflowX:"hidden"}} className="container py-4">
                <div className='row'>
                <div className="col-md-4">
                <img className='img-fluid' src={travel} alt="" />
                </div>
                <div className="col-md-8">
        <form className='custom-form' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-6 col-md-6">
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
                </div>
                <div className="col-6 col-md-6">
                <input type="number" {...register("cost")} placeholder="Your Expense (by taka)" />
                <input type="number" step="0.1" min='1' max='5' {...register("star")} placeholder="Rating (out of 5)" />
                <input type="number" {...register("rating")} placeholder="Reviews" />
                <input {...register("image")} placeholder="image url" />
                <input {...register("title")} placeholder="Description Title" />
                <textarea {...register("description", { required: true })} placeholder="Description"></textarea>
                <input className="btn btn-primary" type="submit" />
                    </div>
                </div>
        </form>
    </div>
        </div>
        </div>
       
       {/* <div className='text-center'>
           <Link to="/shareExp"><button className='btn btn-secondary mx-2'>Share Your Blog</button></Link>
           <Link to="/home"><button className='btn btn-primary'>Home</button></Link>
       </div> */}
            
        {/* <Footer></Footer> */}
    </>
    );
};

export default ShareExperience;