import React from 'react'
import HeroSection from './HeroSection';
import OpenAccount from "../OpenAccount";
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Footer from "../Footer";
import TopNav from '../TopNav';
import Awards from './Awards';

function HomePage() {
    return ( 
        <>
        
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        


        </>
     );
}

export default HomePage;