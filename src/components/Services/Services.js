import React,{useEffect} from 'react'
import {services} from './data'
import vector from '../../assets/Vector.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='flex flex-col w-full max-w-[1240px] mt-[190px] mx-auto' id='services'>
      <div className='flex flex-col items-center text-center justify-center' data-aos="fade-in" data-aos-duration="1200">
        <h1 className='font-bold text-xl md:text-3xl mb-[26px]'>Our services</h1>
        <div className='bg-black w-[52px] h-[2px] mb-[33px]'></div>
        <p className='px-4 text-[#7D7987] max-w-[952px]'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </div>
      <div className='flex flex-col items-center justify-center lg:grid grid-rows-3 grid-cols-3 gap-[34px] mt-[80px]'>
      <img className='absolute left-[0]' src={vector} alt='vector'/>
        {services.map((item,index)=>{
            const {img , title , text} = item
            return(
                <div key={index} className='flex flex-col items-start border-2 border-gray-100 bg-white shadow-lg max-w-[350px] h-[354px] relative p-[25px] rounded-md hover:shadow-2xl' data-aos="fade-out" data-aos-duration="1200">
                    <img className='w-[70px] h-[95px] my-[20px]' src={img.type} alt='foto'/>
                    <h2 className='text-xl mt-[22px] font-bold'>{title}</h2>
                    <p className='text-[#7D7987] mt-[8px]'>{text}</p>
                    <button className='w-[150px] h-[50px] text-[#458FF6] font-bold border-2 border-[#458FF6] rounded-md mt-[25px] hover:text-white hover:bg-[#458FF6]'>Learn more</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Services
