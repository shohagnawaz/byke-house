import React from 'react';
import Banner from '../Banner/Banner';
import CardByke from '../CardByke/CardByke';
import Parts from '../Parts/Parts';
import GoogleMap from '../GoogleMap/GoogleMap';
import { BackgroundLinesDemo } from '../BackgroundLinesDemo/BackgroundLinesDemo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardByke></CardByke>
            <BackgroundLinesDemo></BackgroundLinesDemo>
            <Parts></Parts>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;