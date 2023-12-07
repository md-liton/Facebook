import React from 'react';
import { CiCamera ,CiMenuKebab,CiLogout} from "react-icons/ci";
import { MdModeEditOutline , MdVideoCameraFront,MdSettings} from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoIosSearch,IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import { TbFlag3 } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import { IoGrid } from "react-icons/io5";
import img from "../assets/img.jpg";
import profile from "../assets/profile.jpg"
import { Link } from 'react-router-dom';



const Profile = () => {
  return (
    <>
    <section>
        <div className="container mx-auto relative">
        <Link to='/login' className='absolute top-0 left-0 bg-secondary_color py-[5px] px-[10px] rounded mt-[10px] ml-[10px] cursor-pointer'>
        <CiLogout className='text-primary_color text-[25px] ' />
        </Link>
            <div>
                <div className='h-[200px] w-full bg-red-500  rounded mt-[10px]'>
                    <img src={img} alt="" className='h-full w-full rounded '/>
                    <div className='flex justify-end mt-[-35px]'>
                        <button className=' bg-secondary_color font-bold  mr-[10px] mb-[10px] flex items-center  gap-[10px] px-[5px] rounded '>
                            <CiCamera /> Edit Cover Photo
                        </button>
                    </div>
                </div>

                <div className='flex justify-center'>
                <div className='h-[100px] w-[100px] rounded-full bg-secondary_color cursor-pointer mt-[-60px] flex justify-center items-center overflow-hidden'>
                    <img src={profile} alt="" className='h-full w-full' />
                </div>
                </div>
                <div className='flex justify-center'>
                    <div className='ml-[65px] mt-[-25px]  bg-secondary_color h-[20px] w-[20px] rounded-full flex justify-center items-center cursor-pointer'> <CiCamera /></div>
                </div>

                <div className='h-[1px] bg-[#777] mt-[50px]'></div>

                <div className='flex'>
                    <div className='w-1/2'>
                        <ul className='flex gap-[15px] '>
                            <li className='py-[10px] text-[15px] font-bold hover:border-b hover:border-b-primary_color hover:text-primary_color  duration-100 border-b border-white'><a href="">Posts</a></li>
                            <li className='py-[10px] text-[15px] font-bold hover:border-b hover:border-b-primary_color hover:text-primary_color  duration-100'><a href="">About</a></li>
                            <li className='py-[10px] text-[15px] font-bold hover:border-b hover:border-b-primary_color hover:text-primary_color  duration-100'><a href="">Friends</a></li>
                            <li className='py-[10px] text-[15px] font-bold hover:border-b hover:border-b-primary_color hover:text-primary_color  duration-100'><a href="">Photos</a></li>
                            <li className='py-[10px] text-[15px] font-bold hover:border-b hover:border-b-primary_color hover:text-primary_color  duration-100'><a href="">
                                <div className='flex justify-center items-center gap-[5px]'>
                                More <IoMdArrowDropdown />
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    <div className='w-1/2 flex justify-end items-center gap-[10px] '>
                        <div className='flex justify-center items-center gap-[2px] bg-[#e5e7eb] h-[30px] px-[10px] rounded cursor-pointer'><MdModeEditOutline /> Edit Profile</div>
                        <div className='flex justify-center items-center gap-[2px] bg-[#e5e7eb] h-[30px] px-[10px] rounded cursor-pointer'>
                        <FaEye />
                        </div>
                        <div className='flex justify-center items-center gap-[2px] bg-[#e5e7eb] h-[30px] px-[10px] rounded cursor-pointer'><IoIosSearch /></div>
                        <div className='flex justify-center items-center gap-[2px] bg-[#e5e7eb] h-[30px] px-[10px] rounded cursor-pointer'><HiDotsHorizontal /></div>
                    </div>
                </div>
                    
                    <div className='px-[20px] mt-[15px] flex gap-[20px] bg-[#e2e8f0] py-[10px]'>
                        <div className='w-1/3 '>

                            <div className='bg-white rounded p-[10px] '>
                            <h5 className='font-bold mb-[10px]'>Intro</h5>
                            <div className='text-center py-[8px] bg-secondary_color font-bold rounded cursor-pointer'>Edite Details</div>
                            <div className='text-center py-[8px] bg-secondary_color font-bold rounded my-[20px] cursor-pointer'>Added Hobbies</div>
                            <div className='text-center py-[8px] bg-secondary_color font-bold rounded cursor-pointer'>Added Featured</div>
                            </div>
                            
                            <div>
                                <div className='flex bg-white p-[10px] rounded'>
                                    <div className='w-1/2'>
                                    <h5 className='font-bold mb-[10px]'>Photos</h5>
                                    </div>
                                    <div className='w-1/2'>
                                    <p className='text-end'>See All Photos</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='w-2/3'>


                            <div className='bg-white p-[10px] rounded'>
                                <div className='flex gap-[10px] items-center'> 
                                    <div className='w-[50px] h-[50px] rounded-full bg-secondary_color cursor-pointer'></div>
                                    <div className='w-full rounded-full py-[10px] bg-secondary_color cursor-pointer'>
                                        <p className='text-center text-[#777]'>What's on your mind</p>
                                    </div>
                                </div>
                                
                                <div className='h-[1px] bg-secondary_color mt-[10px]'></div>

                                <div className='flex py-[10px]'>
                                    <div className='w-1/3 flex items-center justify-center gap-[5px] cursor-pointer' >
                                    <MdVideoCameraFront className='text-red-500' /> <span className='text-[#777]'>Live</span>
                                    </div>
                                    <div className='w-1/3 flex items-center justify-center gap-[5px] cursor-pointer border-l border-r border-red-500'>
                                    <GrGallery className='text-green-500' /> <span className='text-[#777]'>Photo/video</span>
                                    </div>
                                    <div className='w-1/3 flex items-center justify-center gap-[5px] cursor-pointer'>
                                    <TbFlag3 className='text-blue-500' /> <span className='text-[#777]'>Life Event</span>
                                    </div>
                                </div>

                            </div>


                            <div className='flex items-center bg-white rounded mt-[10px] p-[10px]'>
                                <div className='w-1/2'>
                                <h5 className='font-bold '>Posts</h5>
                                </div>
                                <div className='w-1/2 flex items-center justify-end gap-[10px]'>
                                    <button className='flex items-center gap-[10px] bg-[#e5e7eb]  px-[20px] py-[10px] rounded cursor-pointer'>
                                    <LuSettings2 /> <span className='font-bold '>Filters</span>
                                    </button>
                                    <button className='flex items-center gap-[10px] bg-[#e5e7eb]  px-[20px] py-[10px] rounded cursor-pointer'>
                                    <MdSettings /> <span className='font-bold '>Manage Posts</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className='flex items-center rounded bg-white mt-[2px]'>
                                <div className='w-1/2 flex justify-center items-center gap-[5px] py-[10px] cursor-pointer font-bold'>
                                <SlMenu /> <span>List View</span>
                                </div>
                                <div className='w-1/2 flex justify-center items-center gap-[5px] py-[10px] cursor-pointer font-bold'>
                                <IoGrid /> <span>Grid View</span>
                                </div>
                            </div>

                            {/* post part start */}
                            <div className='bg-white rounded mt-[10px] p-[10px]'>
                                <div className='flex items-center'>
                                    <div className='w-1/2 flex items-center gap-[10px]'>
                                        <div className='h-[50px] w-[50px] rounded-full bg-secondary_color cursor-pointer'>
                                        </div>
                                        <div>
                                            <h5 className='font-bold text-[15px]'>name</h5>
                                            <p className='text-[13px]'>time</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2 flex justify-end items-center '>
                                    <CiMenuKebab className='cursor-pointer'/>
                                    </div>
                                </div>
                                <div className='bg-secondary_color h-[300px] mt-[10px]'></div>
                            </div>
                            {/* post part end */}


                        </div>




                    </div>

                    






            </div>
        </div>
    </section>
    </>
  )
}

export default Profile