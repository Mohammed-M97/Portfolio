import React from 'react'
import {useRef} from 'react';

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    // Form will submit normally to getform.io
    // Reset form fields after a short delay to allow submission
    setTimeout(() => {
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';
    }, 100);
  };
  return (
    <div className='background'>
        <div name='contact' className='w-full h-[100vh] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/731b42e6-c21f-4692-9c0b-ed2bd3b43a4b" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 textmain'>Contact</p>
                    <p className='textmain py-4'>// Submit the form below or shoot me an email -</p>
                    <p className='textmain'>Mohammed-Alawlaqi@outlook.com</p>
                </div>
                <input ref={nameRef} className='bg-[#ccd6f6] contactColor p-2' type="text" placeholder='Name' name='name' required />
                <input ref={emailRef} className='my-4 p-2 bg-[#ccd6f6] contactColor' type="email" placeholder='Email' name='email' required />
                <textarea ref={messageRef} className='bg-[#ccd6f6] contactColor p-2' name="message" rows="10" placeholder='Message' required></textarea>
                <button onClick={handleSubmit} type="submit" className=' border-2 buttonBg px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
            
            
        </div>
    </div>
  )
}

export default Contact