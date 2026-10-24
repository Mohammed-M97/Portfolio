import {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { socials } from '../data/socials'


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
    <div className='fixed z-20 w-full h-[80px] flex justify-between items-center px-4 background textmain'>
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
            <li className='flex gap-4 pt-8'>
                {socials.map(({ name, url, icon: Icon, color }) => (
                    <a key={name} target='_blank' rel='noreferrer' href={url} aria-label={name}
                       className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color}`}>
                        <Icon size={'22px'} />
                    </a>
                ))}
            </li>
      </ul>

        {/* Social icons (desktop) */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {socials.map(({ name, url, icon: Icon, color }) => (
                    <li key={name} className={`w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 ${color}`}>
                        <a target='_blank' rel='noreferrer' className='flex justify-between w-full text-gray-300' href={url}>
                            {name} <Icon size={'30px'} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
