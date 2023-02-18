import React from 'react';
import ReactDOM from 'react-dom/client';
//import {  auth  } from './firebase';
//import {  useAuthState  } from 'react-firebase-hooks/auth';
//import ChatBox from './components/ChatBox';
import './index.css';
import Home from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Home />

  </React.StrictMode>
);