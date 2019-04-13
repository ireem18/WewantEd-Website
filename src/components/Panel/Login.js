import React from 'react';

export default function Login() {
  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Login</h1>
        <div className="social-container">
          <a href="/" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="/">Forgot your password?</a>
        <button>Login</button>
      </form>
    </div>
  );
}
