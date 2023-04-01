import React, { useState } from 'react';
import '../App.css';
import { Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import LoginPageCSS from '../css/loginpage.module.css';



function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('login');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/${action}`, {
        username: email,
        password: password,
      });
  
      if (action === 'login') {
        console.log('User logged in:', response.data);
        // Set user data to context or local storage and redirect to a protected page
      } else {
        console.log('User registered:', response.data);
        // Redirect to the login page or show a success message
      }
    } catch (error) {
      console.log(`${action === 'login' ? 'Login' : 'Registration'} failed:`, error.response.data);
      // Show an error message or handle the error
    }
  }; 

  return (
    <div className={LoginPageCSS.container}>
      <div className={LoginPageCSS["sub-container"]}>
      <p className={LoginPageCSS.header}>{action === 'login' ? 'Login' : 'Sign Up'}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">{action === 'login' ? 'Login' : 'Sign Up'}</button>
          </div>
          <div>
            <button type="button" onClick={() => setAction(action === 'login' ? 'signup' : 'login')}>
              {action === 'login' ? 'Create an account' : 'Already have an account?'}
            </button>
          </div>
        </form> 
        </div>
    </div>
  );
}

export default LoginPage;