import {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-router-dom'


function Navbar() {
    

    const [isDark] = useState(true);

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
                <Link to="/">
                <img className='sizeImg img' alt="Mohammed Alawlaqi Portfolio Logo" />
                </Link>
            </div>

        {/* menu */}
        <div>
            <ul className='hidden md:flex'>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/skills">Skills</Link>
                </li>
                <li>
                <Link to="/work">Work</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
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
            <Link onClick={handleClick} to="/">Home</Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="/about">About</Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="/skills">Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="/work">Work</Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="/media">Media</Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to="/contact">Contact</Link>
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
                    <a target="__blank" className='flex justify-between w-full text-gray-300' href="https://drive.google.com/file/d/1PtpVU32hROqPcDeYiTwICbvZbUtHO6Im/view?usp=sharing">
                        Resume <BsFillPersonLinesFill size={'30px'} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
