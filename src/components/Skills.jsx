import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import php from '../assets/php.png'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import git from '../assets/git.png'
import nodejs from '../assets/nodejs.png'
import bootstrap from '../assets/bootstrap.png'


function Skills() {
  return (
    <div name="skills" className='w-full h-screen background textmain'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
      <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
      </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md skillsShow bg-[#3e4856] shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={HTML} alt="HTML5 logo" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={CSS} alt="CSS3 logo" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={Tailwind} alt="Tailwind CSS logo" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={bootstrap} alt="Bootstrap logo" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={JavaScript} alt="JavaScript logo" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={ReactImg} alt="React logo" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={nodejs} alt="Node.js logo" />
                  <p className='my-4'>Node js</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={java} alt="Java logo" />
                  <p className='my-4'>Java</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-9' src={php} alt="PHP logo" />
                  <p className='mt-8 '>PHP</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-3' src={mysql} alt="MySQL logo" />
                  <p className='my-4 '>MySQL</p>
              </div>
              <div className='shadow-md skillsShow shadow-[#040c16] hover:scale-110 duration-500' role="button" tabIndex="0">
                  <img className='w-20 mx-auto pt-9' src={git} alt="Git logo" />
                  <p className='mt-8'>Git</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
