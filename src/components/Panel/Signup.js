import React from 'react';
import './Signup.css';
import logo from './../../issue/LOGO1.png';

export default function Signup() {
  return (
    <div className="form-container sign-up-container">
      <form className="FrameLogin">
        <img class="ui mini image Logo1" src={logo} style={{ size: '100px x 10px',marginRight:'200px' }} alt="logo" />
        <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry">
          Lorem Ipsum is simply dummy text of the printing industry.
       </p>
        <p className="Lorem-Ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500s-when-an-unknown-printer-took-a-galley-of-type-it-specimen-book ">
          Lorem ipsum has been the industry standerd dummy text ever since the 1500s,when an unknown printer took a gallery
          of the type it specimen book.
      </p>
        <div className="Inputs">
          <input type="text" className="Input-Base" placeholder='Adınız' />
          <input type="text" className="Input-Base" placeholder='Soyadınız' />
          <input type="text" className="Input-Base" placeholder='E-posta adresi' />
          <input type="password" className="Input-Base" placeholder='Parolanızı giriniz' />
          <input type="password" className="Input-Base" placeholder='Parolanızı tekrar giriniz' />
          <button type="button" className="baseButton">İleri</button>
        </div>
      </form>
   
     
    </div>
  );
}
