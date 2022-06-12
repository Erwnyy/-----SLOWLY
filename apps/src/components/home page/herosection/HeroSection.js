import React from 'react';
import { Button } from '../../button/Button';
import './herosection.css';

function HeroSection() {
  return (
    <div className='heros-container'>
      <video src='/videos/pantai.mp4' autoPlay loop muted />
      <h1>Dinda Syahnaz Hafidzani</h1>
      <p>Anak gg darusalaam</p>
      <div className='hero-btnsg'>
        <Button
          className='btnsg'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
