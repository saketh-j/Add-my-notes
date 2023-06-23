import React, { useState } from 'react';
import Poster from '../components/poster';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const history =useNavigate();
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [name,setName] =useState('');


    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/Register",{
                name,email,password
            })
            .then(res=>{
              if(res.data=="exist"){
                  alert("User not Exist")
              }else if(res.data=="notexist"){
               history("/Login")
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
                     <input type="text" className='inputs' name="username" placeholder='UserName' onChange={(e)=>{setName(e.target.value)}} /> <br />
                    <input type="email" className='inputs' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/> <br />
                    <input type="password" className='inputs' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/> <br />
                    <input type="submit" className='input-btn'  onClick={submit} />
                </form>
         </div>
       </div>
    </>
  );
}

export default Register;
