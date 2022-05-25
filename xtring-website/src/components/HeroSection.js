import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>CREDIT SCORE FOR CRYPTO WALLETS</h1>
            <p>Build Your On-chain Reputation</p>
        </div>
    );
}

export default HeroSection;