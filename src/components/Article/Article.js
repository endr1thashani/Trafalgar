import React,{useEffect} from 'react'
import {articles} from './data'
import vector2 from '../../assets/Vector2.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Article = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='flex flex-col w-full max-w-[1240px] mt-[190px] mx-auto' id='article'>
      <div className='flex flex-col items-center text-center justify-center' data-aos="fade-in" data-aos-duration="1200">
        <h1 className='font-bold text-xl md:text-3xl mb-[26px]'>Check out our latest article</h1>
        <div className='bg-black w-[52px] h-[2px] mb-[33px]'></div>
      </div>
      <div className='flex flex-col items-center justify-center lg:grid grid-rows-1 grid-cols-3 gap-[34px] mt-[80px]'>
      <img className='absolute right-[0]' src={vector2} alt='vector'/>
        {articles.map((item,index)=>{
            const {foto , title , text} = item
            return(
                <div key={index} className='flex flex-col items-center shadow-lg max-w-[350px] relative p-[15px] rounded-lg hover:shadow-2xl' data-aos="fade-out" data-aos-duration="1200">
                    <img className='w-full my-[20px]' src={foto.type} alt='foto'/>
                    <h2 className='text-xl mt-[22px] font-bold'>{title}</h2>
                    <p className='text-[#7D7987] mt-[8px]'>{text}</p>
                    <button className='w-[150px] h-[50px] text-[#458FF6] font-bold'>Learn more</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Article
