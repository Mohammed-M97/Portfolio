import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'


function Navbar() {
    

    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (!isDark) {
          document.body.classList.remove('dark');
          document.body.classList.add('light');
        } else {
          document.body.classList.add('dark');
          document.body.classList.remove('light');
        }
    }, [isDark]);

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 background textmain'>
            <div>
                <a href="/">
                <img className='sizeImg img' />
                </a>
            </div>

        {/* menu */}
        <div>
            <ul className='hidden md:flex'>
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/About">About</a>
                </li>
                <li>
                <a href="/Skills">Skills</a>
                </li>
                <li>
                <a href="/Work">Work</a>
                </li>
                <li>
                <a href="/Contact">Contact</a>
                </li>
                <li>
                    {/* <label class="relative inline-flex items-center mr-5 cursor-pointer">
                        <input checked={isDark} onClick={({target}) => setIsDark(target.checked)} type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#0a192f]"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                    </label> */}
                    
                    
                </li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Moblie menu */}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen background flex flex-col justify-center items-center'
        }
        >
            <li className='py-6 text-4xl'>
            <a onClick={handleClick} href="/">Home</a>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <a onClick={handleClick} href="/About">About</a>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <a onClick={handleClick} href="/Skills">Skills</a>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <a onClick={handleClick} href="/Work">Work</a>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <a onClick={handleClick} href="/Media">Media</a>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <a onClick={handleClick} href="/Contact">Contact</a>
            </li>
            <li>
                    {/* <label class="relative inline-flex items-center mr-5 cursor-pointer mobileToggle">
                        <input checked={isDark} onClick={({target}) => setIsDark(target.checked)} type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#0a192f]"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                    </label> */}
            </li>
      </ul>

        {/* Social icona */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a target="__blank" className='flex justify-between w-full text-gray-300' href="https://www.linkedin.com/in/mohammed-alawlaqi/">
                        LinkedIn <FaLinkedin size={'30px'} />
                    </a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a target="__blank" className='flex justify-between w-full text-gray-300' href="https://github.com/Mohammed-M97">
                        Github <FaGithub size={'30px'} />
                    </a>
                </li>
                <li className='w-[130px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a target="__blank" className='flex justify-between w-full text-gray-300' href="mailto:mohammed-alawlaqi@outlook.com">
                        Email <HiOutlineMail size={'30px'} />
                    </a>
                </li>
                <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a target="__blank" className='flex justify-between w-full text-gray-300' href="https://drive.google.com/file/d/1LvQFA5MtJ7T8hCzufo1z5tF0XHFH3qq6/view?usp=sharing">
                        Resume <BsFillPersonLinesFill size={'30px'} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
