import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videso/video-1.mp4' autoPlay loop muted />
            <h1>CRYPTO NATIVE CREDIT SCORE</h1>
            <p>Build your on-chain reputation</p>
        </div>
    );
}

export default HeroSection;