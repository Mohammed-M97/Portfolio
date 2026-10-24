import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

// Shared by the desktop side bar, the mobile menu and the home page
export const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammed-alawlaqi/', icon: FaLinkedin, color: 'bg-blue-600' },
    { name: 'Github', url: 'https://github.com/Mohammed-M97', icon: FaGithub, color: 'bg-[#333333]' },
    { name: 'Email', url: 'mailto:mohammed-alawlaqi@outlook.com', icon: HiOutlineMail, color: 'bg-[#6fc2b0]' },
    { name: 'Resume', url: 'https://drive.google.com/file/d/1PtpVU32hROqPcDeYiTwICbvZbUtHO6Im/view?usp=sharing', icon: BsFillPersonLinesFill, color: 'bg-[#565f69]' },
]
