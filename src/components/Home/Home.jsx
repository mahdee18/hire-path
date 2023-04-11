import React from 'react';
import Header from '../Header/Header';
import Category from '../Category/Category';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Category></Category>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;