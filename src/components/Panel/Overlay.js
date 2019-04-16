import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';


export default function Overlay({ onButtonClick }) {
  return (
    <div className="overlay-container  ">
      <div className="overlay">
        <div className="overlay-panel overlay-left" >
          <p className="Lorem-ipsum-Dolor-Sit-Amet-Lorem ">
          Lorem ipsum Dolor Sit Amet Lorem  
          </p>
          <button onClick={onButtonClick} className="Rectangle-3  ">
            <span className="Button-1">Button </span>
          </button>
          <div className="footer">
            <span className="Anasayfa" style={{ paddingRight: '10px' }}>Anasayfa</span>
            <span className="Hakkımızda" style={{ paddingRight: '10px' }}>Hakkımızda</span>
            <span className="WeWantEd-Labs" style={{ paddingRight: '10px' }}>WewantEd-Labs</span>
            <span className="Etkinlikler" style={{ paddingRight: '10px' }}>Etkinlikler</span>
            <span className="Blog" style={{ paddingRight: '10px' }}>Blog</span>
          </div>
         
        </div>
        <div className="overlay-panel overlay-right ">
          <p className="Lorem-ipsum-Dolor-Sit-Amet-Lorem  ">
            Lorem ipsum Dolor Sit Amet Lorem
          </p>
            
           <button onClick={onButtonClick}  className="Rectangle-3 ">
            <span className="Button-1">Button</span>
            </button> 
          
          <div className="footer">
            <span className="Anasayfa" style={{ paddingRight: '10px' }}>Anasayfa</span>
            <span className="Hakkımızda" style={{ paddingRight: '10px' }}>Hakkımızda</span>
            <span className="WeWantEd-Labs" style={{ paddingRight: '10px' }}>WewantEd-Labs</span>
            <span className="Etkinlikler" style={{ paddingRight: '10px' }}>Etkinlikler</span>
            <span className="Blog" style={{ paddingRight: '10px' }}>Blog</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

Overlay.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};


/*<h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button onClick={onButtonClick} className="ghost" id="signUp">
            Sign Up
          </button>


          */