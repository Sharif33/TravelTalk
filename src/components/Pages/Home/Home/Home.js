import React from 'react';
import Header from '../../../Shared/Header/Header';
import BannerTop from '../../Banner/BannerTop';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Header/>
            <BannerTop/>
           <Blogs/>
        </div>
    );
};

export default Home;