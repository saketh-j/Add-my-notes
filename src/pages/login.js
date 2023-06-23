import React, { useState } from 'react';
import Poster from '../components/poster';
import Navbar from '../components/navbar';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate()
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/Login",{
                email,password
            })
            .then(res=>{
              if(res.data=="exist"){
               history("/Home",{state:{id:email}})
              }else if(res.data=="notexist"){
                 alert("user not Exists")
              }
             })
             .catch(e=>{
              alert('wrong details')
             })
        }
        catch(e){
          console.log(e)
        }
    }

    
  return (
    <>
      <div>
        <Navbar/>
      </div>
       <div className='main'>
            <Poster/>
         <div className='r-right'>
                <form action="POST">
                    <input type="email" className='inputs' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" className='inputs' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/> <br />
                    <input type="submit" className='input-btn' onClick={submit} />
                </form>
         </div>
       </div>
    </>
  );
}

export default Login;
