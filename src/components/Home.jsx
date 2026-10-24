import { socials } from '../data/socials'

function Home() {
  return (
    <div name='home' className='w-full h-screen background'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='nameText mx-auto font-bold border-b-4 border-pink-600 ml-1'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold textmain'>Mohammed Alawlaqi</h1>
        <h2 className='text-4xl sm:text-7xl font-bold textcolor'>I'm a Full Stack Developer</h2>
        <p className='textcolor py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        {/* Social links (the side bar covers large screens) */}
        <div className='flex gap-4 pt-2 lg:hidden'>
          {socials.map(({ name, url, icon: Icon, color }) => (
            <a key={name} target='_blank' rel='noreferrer' href={url} aria-label={name} title={name}
               className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color}`}>
              <Icon size={'22px'} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
