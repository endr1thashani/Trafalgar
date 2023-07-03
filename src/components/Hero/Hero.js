import React, {useEffect} from 'react';
import trafalgar from '../../assets/trafalgar.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='flex max-w-[1240px] mx-auto items-center flex-col  justify-between mt-6 md:flex-row' id='home'>
      <div className='flex flex-col p-5 mb:p-0 items-start max-w-[460px]' data-aos="fade-up" data-aos-duration="1200">
        <h1 className='text-xl mb-2 font-semibold md:text-5xl'>Virtual healthcare for you</h1>
        <p className='text-[#7D7987] text-xl my-5'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <button className='flex items-center justify-center text-white font-bold w-[200px] h-[56px] bg-[#458FF6] rounded-md hover:bg-[#0063ee]'>Consult today</button>
      </div>
      <div data-aos="fade-down" data-aos-duration="1200">
        <img src={trafalgar} alt='trafalgar'/>
      </div>
    </div>
  )
}

export default Hero
