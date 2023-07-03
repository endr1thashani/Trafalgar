import React, {useState, useEffect} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [bg, setBg] = useState(false)
  
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        return window.scrollY > 50 ? setBg(true) : setBg(false)
      })
    })
    const handleNav = () => {
      setNav(!nav);
    };
  
    const closeNav = () => {
      setNav(false);
    };
  return (
        <header className={`${bg ? 'bg-[#67C3F3] py-4 lg:py-6' : 'bg-none'} sticky px-4 md:px-[140px] justify-between m-auto top-0 z-50 flex items-center h-20`}>
            <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center rounded-full w-[41px] h-[41px] bg-[#458FF6]'>
                <p className='text-white font-bold text-2xl'>T</p>
            </div>
            <h1 className='font-semibold text-xl text-black ml-2'>Trafalgar</h1>
            </div>
            <ul className='hidden md:flex decoration-none text-gray-500 gap-x-10 text-base font-bold'>
            <a href='#home'>Home</a>
            <a href='#services'>Find a doctor</a>
            <a href='#leading'>Leading</a>
            <a href='#apps'>Apps</a>
            <a href='#article'>Articles</a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full md:hidden bg-[#67C3F3] ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
        <div className='flex p-4 items-center'>
            <div className='flex justify-center items-center rounded-full w-[41px] h-[41px] bg-[#458FF6]'>
                <p className='text-white font-bold text-2xl'>T</p>
            </div>
            <h1 className='font-semibold text-xl text-black ml-2'>Trafalgar</h1>
            </div>
          <ul className='uppercase p-4 text-gray-500 font-bold'>
            <li className='p-4'>
              <a href='#home' onClick={closeNav}>
                Home
              </a>
            </li>
            <li className='p-4'>
              <a href='#services' onClick={closeNav}>
              Find a doctor
              </a>
            </li>
            <li className='p-4'>
              <a href='#leading' onClick={closeNav}>
              Leading
              </a>
            </li>
            <li className='p-4'>
              <a href='#offers' onClick={closeNav}>
              Apps
              </a>
            </li>
            <li className='p-4'>
              <a href='#article' onClick={closeNav}>
              Articles
              </a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Navbar
