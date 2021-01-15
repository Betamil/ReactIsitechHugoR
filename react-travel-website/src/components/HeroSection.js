import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import bg from '../planteImages/bg.jpg'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={bg}/>
      <h1>Nature&Co</h1>
      <p>Les plantes et... Les plantes</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          NOUS SUIVRE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          NOTRE BOUTIQUE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
