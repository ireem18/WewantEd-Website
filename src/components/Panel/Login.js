import React from 'react';
import './Login.css';
import logo from './../../issue/LOGO1.png';



export default function Login(onButtonClick) {
  return (
    
    <div className="form-container sign-in-container FrameLogin ">
       <img class="ui mini image Logo1" src={logo} style={{size:'100px x 10px'}}alt="logo" />
    <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry">
    Lorem Ipsum is simply dummy text of the printing industry.
    </p>
    <p className="Lorem-Ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500s-when-an-unknown-printer-took-a-galley-of-type-it-specimen-book">
      Lorem ipsum has been the industry standerd dummy text ever since the 1500s,when an unknown printer took a gallery 
      of the type it specimen book.
      </p>
   
        <div>
          <input  type="text" className="email"placeholder='joe@gmail.com' />  
          <input type="password" className="parola" placeholder='********' />
        <div className="checkBox">
          <input type="checkbox" className="check-solid1" />
          <span className="Beni-Hatırla">Beni Hatırla</span>
          <span className="Sifremi-Unuttum">Şifremi Unuttum</span>
        </div>
          <div className='ortala'>
          <button type="button"className="button">Giriş Yap</button>
          </div>
        </div>
      
    <div className='text'>Ya da sosyal medya aracılığı ile</div>
    <div className='social-container'>
          <a href="/" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-github" />
          </a>
        <a href="/" className="social">
          <i className="fab fa-twitter" />
        </a>         
    </div>
      <div className="footer">
      <span className="Aramza-katlmak-ister-misin-Kayt-Ol">
        Aramıza katılmak ister misin?{' '}
      </span>
      <span  onClick={onButtonClick} className="kayit-ol"  id="signUp">
       
        Kayıt Ol
        </span>
      </div>
    </div>
  );
}
