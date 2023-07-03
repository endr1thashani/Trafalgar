import React,{useEffect} from 'react'
import apps from '../../assets/apps.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Download = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='flex flex-col md:flex-row w-full max-w-[1240px] mx-auto items-center mt-[150px]' id='apps'>
      <div className='flex flex-col items-start justify-center md:mt-[120px] p-6 md:p-0 ' data-aos="zoom-in" data-aos-duration="1200">
        <h1 className='text-2xl font-bold md:text-4xl'>Download our mobile apps</h1>
        <div className='bg-black w-[56px] h-[2px] my-[25px]'></div>
        <p className='text-[#7D7987] leading-7'>Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely</p>
        <button className='w-[150px] h-[50px] flex items-center justify-center mt-[35px] text-[#458FF6] font-semibold border-2 border-[#458FF6] rounded-md hover:text-white hover:bg-[#458FF6]'>Download ↓</button>
      </div>
      <img data-aos="zoom-in" data-aos-duration="1200" src={apps} alt='apps'/>
    </div>
  )
}

export default Download
