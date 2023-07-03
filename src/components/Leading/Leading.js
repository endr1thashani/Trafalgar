import React,{useEffect} from 'react'
import leading from '../../assets/2.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Leading = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='flex flex-col md:flex-row w-full max-w-[1240px] mx-auto items-center mt-[100px] md:mt-[-20px]' id='leading'>
      <img data-aos="fade-up" data-aos-duration="1200" src={leading} alt='leading'/>
      <div className='flex flex-col items-start p-6 justify-center md:ml-[120px] md:p-0 ' data-aos="fade-down" data-aos-duration="1200">
        <h1 className='text-2xl font-bold md:text-4xl'>Leading healthcare providers</h1>
        <div className='bg-black w-[56px] h-[2px] my-[25px]'></div>
        <p className='text-[#7D7987] leading-7'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
        <button className='w-[150px] h-[50px] mt-[35px] text-[#458FF6] font-bold border-2 border-[#458FF6] rounded-md hover:text-white hover:bg-[#458FF6]'>Learn more</button>
      </div>
    </div>
  )
}

export default Leading
