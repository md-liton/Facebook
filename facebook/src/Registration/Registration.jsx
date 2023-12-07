import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye ,FaEyeSlash} from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import { ColorRing } from  'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
  const auth = getAuth();
  const navigate =useNavigate()

  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')

  const [emailerr,setEmailerr]=useState('')
  const [nameerr,setNameerr]=useState('')
  const [passworderr,setPassworderr]=useState('')

  const [show ,setShow]=useState(false)
  const [loading,setLoading]=useState(false)

  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setEmailerr('');
  }

  const handleName=(e)=>{
    setName(e.target.value);
    setNameerr('')
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setPassworderr('')
  }

  const handleSignup =()=>{
    if(!email){
      setEmailerr('please input your email');
    }else{
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailerr('please input your valid email');
      }
    }
    if(!name){
      setNameerr('please input your name');
    }
    if(!password){
      setPassworderr('please input password');
    }else{
      if (!/^(?=.*[a-z])/.test(password)){
      setPassworderr('Please give a lowercase alphabet')
    }else if(!/^(?=.*[A-Z])/.test(password)){
      setPassworderr('Please give a upercase alphabet')
    }else if(!/^(?=.*[0-9])/.test(password)){
      setPassworderr('Please give a number')
    }else if(!/^(?=.*[!@#$%^&*])/.test(password)){
      setPassworderr('Please give a symble')
    }else if(!/^(?=.{8,})/.test(password)){
      setPassworderr('Please give minimum 8 charecter')
    }
    }

    if(email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && name && password && /^(?=.*[a-z])/.test(password) && /^(?=.*[A-Z])/.test(password) && /^(?=.*[0-9])/.test(password) && /^(?=.*[!@#$%^&*])/.test(password) && /^(?=.{8,})/.test(password)){
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('please verify');
            console.log(auth.currentUser,'dlskafj');
            toast.success('Registration successful')
            setLoading(true)
            setTimeout(()=>{
              navigate('/login')
            },2000)
          });
      }).catch((error) => {
        toast.error('this email already used')
      });
    }
  }

  


  return (
    <>
    <section className='bg-bg_color relative'>
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
            <h2 className='text-[40px] text-primary_color font-bold'>facebook</h2>
              <p className='text-[25px] '>Facebook helps you connect and share with the people in your life.</p>
            </div>
          </div>

          <div className='w-1/2'>
          

            <div className='bg-[#fff] p-[20px] rounded-[5px] shadow-lg  w-[70%]'>
            <h1 className='text-[20px] text-primary_color mb-[10px] text-center'>Registration</h1>


              <div className='mt-[25px] relative'>
              <input onChange={handleEmail}   className='border p-[10px] rounded w-full focus:outline-none ' type="email" placeholder='Email Address' />
              {
                emailerr &&
                <p className='absolute top-[42px] left-0 pl-[10px] text-red-500'>{emailerr}</p>
              }
              </div>
              
              <div className='my-[25px] relative'>
              <input onChange={handleName} className='border p-[10px] rounded w-full focus:outline-none' type="text" placeholder='Name' />
              {
                nameerr &&
                <p className='absolute top-[42px] left-0 pl-[10px] text-red-500'>{nameerr}</p>
              }
              </div>

              <div className='mb-[25px] relative'>
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


              <div onClick={handleSignup} className='py-[10px] w-full bg-primary_color text-white text-[16px] font-bold rounded mb-[10px] cursor-pointer text-center'>Sign Up</div>
              <Link to='/login'>
              <button className='bg-[#3DAE25] py-[10px]  text-white text-[15px] font-bold rounded ] cursor-pointer px-[20px] w-full'> Sign In</button>
              </Link>
            </div>

            <div className='w-[70%] mt-[10px]'>
            <p className='text-[12px] text-center'>Create a Page for a celebrity, brand or business.</p>
            </div>

          </div>

        </div>




      </div>
      {
        loading &&
        <div className=' absolute top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%] bg-[#e5e5e5] w-[500px] h-[300px] flex justify-center items-center rounded-[10px] '>
        <div>
        <h1 className='text-primary_color text-[25px] font-semibold'>please wait</h1>
        <div className='flex justify-center items-center'>
        <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}}wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>
        </div>
        </div>
        </div>
      }
    </section>
    </>
  )
}

export default Registration