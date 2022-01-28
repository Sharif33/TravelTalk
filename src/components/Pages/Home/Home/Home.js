import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import BannerTop from '../../Banner/BannerTop';
import Blogs from '../Blogs/Blogs';
import ShareExperience from '../ShareExperience/ShareExperience';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <Header/>
            <BannerTop/>
           <Blogs/>
            <div className='py-3'>
           {
               user?.email ? <div>
               <h4 className='text-center py-2 border-left border'>Share your Travel Eperience</h4>
               <ShareExperience/>
           </div>
                 : 
               <div className='text-center'>
               <h4 className='text-center py-2 border-left border'>Please Login to Share your Travel Eperience</h4>
               <Link to="/register"><button className='btn btn-danger'>Login</button></Link>
           </div>
           } 
           </div>
           <Footer/>
        </div>
    );
};

export default Home;