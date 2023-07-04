import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Media() {
  return (
    <div name='media' className='background'>
      <div className='w-full h-[100vh] flex flex-col justify-center items-center'>

            <a target="__blank" href="https://www.linkedin.com/in/mohammed-alawlaqi/">
              <button className='text-white m-4 group border-2 px-[65px] py-8 my-2 flex justify-between items-center hover:bg-blue-600 hover:border-blue-600'>
                  LinkedIn <span className='ml-5'><FaLinkedin size={'30px'} /></span>
              </button>
            </a>

        
          <a className='px-12' target="__blank" href="https://github.com/Mohammed-M97">
              <button className='text-white m-4 mt-10 group border-2 px-[70px] py-8 my-2 flex items-center hover:bg-[#333333] hover:border-[#333333]'>
                    Github <span className='ml-5'><FaGithub size={'40px'} /></span>
              </button>
            </a>
          
            <a className='px-12' target="__blank" href="mailto:mohammed-alawlaqi@outlook.com">
              <button className='text-white m-4 mt-10 group border-2 px-[72px] py-8 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0]'>
                    Email <span className='ml-5'><HiOutlineMail size={'40px'} /></span>
              </button>
            </a>
          
            <a className='px-12' target="__blank" href="https://drive.google.com/file/d/1LvQFA5MtJ7T8hCzufo1z5tF0XHFH3qq6/view?usp=sharing">
              <button className='text-white m-4 mt-10 group border-2 px-[65px] py-8 my-2 flex items-center hover:bg-[#565f69] hover:border-[#565f69]'>
                  Resume <span className='ml-5'><BsFillPersonLinesFill size={'30px'} /></span>
              </button>
            </a>
          
            
        </div>
    </div>
  )
}

export default Media
