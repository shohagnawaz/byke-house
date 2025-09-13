import React from 'react';
import Banner from '../Banner/Banner';
import CardByke from '../CardByke/CardByke';
import Parts from '../Parts/Parts';
import GoogleMap from '../GoogleMap/GoogleMap';
import { BackgroundLinesDemo } from '../BackgroundLinesDemo/BackgroundLinesDemo';
import PopularByke from '../PopularByke/PopularByke';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Byke-House || Home</title>
            </Helmet>
            <Banner></Banner>
            <CardByke></CardByke>
            <BackgroundLinesDemo></BackgroundLinesDemo>
            <PopularByke></PopularByke>
            <Parts></Parts>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;