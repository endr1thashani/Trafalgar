import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-[30px] md:mt-[120px] bg-gradient-to-r from-0% from-[#389dd3] to-[#5A98F2] to-100% text-white'>
    <div className='flex flex-col md:flex-row p-12 items-center max-w-[1240px] mx-auto'>
    <div className='flex flex-col'>
      <div className='flex items-center mb-[15px]'>
      <div className='flex justify-center items-center rounded-full w-[41px] h-[41px] bg-[#ffff]'>
            <p className='text-[#5A98F2] font-bold text-2xl'>T</p>
        </div>
            <h1 className='font-semibold text-xl text-white ml-2'>Trafalgar</h1>
        </div>
        <p className='text-white leading-6'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <p>©Trafalgar LTD 2023. All rights reserved</p>
      </div>
      <div className='flex w-full items-center justify-around'>
        <ul className='flex flex-col my-3 md:my-0'>
            <h2 className='text-xl font-bold'>Company</h2>
            <a href='#home'>Home</a>
            <a href='#services'>Find a doctor</a>
            <a href='#leading'>Leading</a>
            <a href='#apps'>Apps</a>
            <a href='#article'>Article</a>
            <a href='#search'>About us</a>
        </ul>
        <ul className='flex flex-col'>
            <h2 className='text-xl font-bold'>Region</h2>
            <a href='#home'>Home</a>
            <a href='#services'>Find a doctor</a>
            <a href='#leading'>Leading</a>
            <a href='#apps'>Apps</a>
            <a href='#article'>Article</a>
            <a href='#search'>About us</a>
        </ul>
      </div>
      </div>
      </div>
  )
}

export default Footer
