import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye ,FaEyeSlash} from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const auth = getAuth();
  const navigate =useNavigate()

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const [emailerr,setEmailerr]=useState('')
  const [passworderr,setPassworderr]=useState('')

  const [show ,setShow]=useState(false)

  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setEmailerr('');
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setPassworderr('')
  }

  const handleLogin=()=>{
    if(!email){
      setEmailerr('please input your email');
    }
    if(!password){
      setPassworderr('please input password');
    }
    if(email && password){
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('login successful')
        setTimeout(()=>{
          navigate('/')
        },2000)
      })
      .catch((error) => {
        toast.error('user not match')
      });
      console.log('pooo');
    }
  }


  return (
    <>
    <section className='bg-bg_color'>
    <div>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      </div>
      <div className="w-[950px] mx-auto">


        <div className='flex items-center justify-center  h-screen'>

          <div className='w-1/2 flex '>
            <div>
            <h1 className='text-[40px] text-primary_color font-bold'>facebook</h1>
            <p className='text-[25px] '>Facebook helps you connect and share with the people in your life.</p>
            </div>
          </div>


          <div className='w-1/2'>

            <div className='bg-[#fff] p-[20px] rounded-[5px] shadow-lg text-center w-[70%]'>
            <div className='mt-[25px] relative'>
              <input onChange={handleEmail}   className='border p-[10px] rounded w-full focus:outline-none ' type="email" placeholder='Email Address' />
              {
                emailerr &&
                <p className='absolute top-[42px] left-0 pl-[10px] text-red-500'>{emailerr}</p>
              }
              </div>
              <div className='my-[25px] relative'>
              <input onChange={handlePassword} className='border p-[10px] rounded w-full focus:outline-none' type={!show?'password':'text'} placeholder='password' />
              {
                !show 
                ?
                <div onClick={()=>setShow(!show)} className='absolute top-[15px] right-0 pr-[10px] cursor-pointer '>
                <FaEyeSlash />
                </div>
                :
                <div onClick={()=>setShow(!show)} className='absolute top-[15px] right-0 pr-[10px] cursor-pointer '>
                <FaRegEye   />
                </div>
              }
              {
                passworderr &&
                <p className='absolute top-[42px] left-0 pl-[10px] text-red-500'>{passworderr}</p>
              }
              </div>
              <div onClick={handleLogin} className='py-[10px] w-full bg-primary_color text-white text-[16px] font-bold rounded mb-[10px] cursor-pointer'>Login</div>
              <div className='text-[14px] text-primary_color mb-[10px] cursor-pointer'>Forgotten password?</div>
              <div className='h-[1px] bg-[#cbd5e1] mb-[20px]'></div>
              <Link to='/registration' className='bg-[#3DAE25] py-[10px]  text-white text-[15px] font-bold rounded ] cursor-pointer px-[20px]'>Create new account</Link>
            </div>

            <div className='w-[70%] mt-[10px]'>
            <p className='text-[12px] text-center'>Create a Page for a celebrity, brand or business.</p>
            </div>

          </div>

        </div>




      </div>
    </section>
    </>
  )
}

export default Login