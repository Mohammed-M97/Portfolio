import { socials } from '../data/socials'

function Social() {
  return (
    <div name='social' className='background'>
      <div className='w-full min-h-screen pt-[96px] pb-16 flex flex-col justify-center items-center gap-6'>
        {socials.map(({ name, url, icon: Icon, hover }) => (
          <a key={name} target='_blank' rel='noreferrer' href={url}
             className={`w-[260px] flex justify-between items-center border-2 px-10 py-6 text-white hover:border-transparent ${hover}`}>
            {name} <Icon size={'30px'} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Social
