import React from 'react';
import Navbar from '../components/navbar';
import Poster from '../components/poster';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
       <div className='main'>
            <Poster/>
         <div className='right'>
            <img className='right-1' src="https://www.thecoderashok.com/Posts/images/default-email-validation-message-from-browser.png" alt="email" />
            <img className='right-2' src="https://i.ytimg.com/vi/P-l1u5nvfEc/mqdefault.jpg" alt="password" />

            <h1 className='heading'>Welcome</h1>
        <div>
           <Link to='/Register' className='button'>Register</Link>
           <Link to='/Login' className='button'>Login</Link>
        </div>
         </div>
       </div>
    </>
  );
}

export default Landing;
