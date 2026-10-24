import { data } from "../data/data.js";
import { Link } from "react-router-dom";


const Work = () => {

    // projects file
    const project = data;

  return (
    <div name='work' className='background textmain w-full min-h-screen pt-[96px] pb-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
            Work
          </p>
          <p className='py-6'>{'// Check out some of my recent work'}</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Gird Item */}
          {project.map((item) => (
  <Link
    key={item.id}
    to={`/work/projects/${item.slug}`}
    className="relative block h-[220px] overflow-hidden rounded-md shadow-lg shadow-[#040c16] group bg-[#112240]"
    aria-label={`View ${item.name} project details`}
  >
    <img
      src={item.image}
      alt={`${item.name} preview`}
      loading="lazy"
      className="w-full h-full object-cover object-top duration-500 group-hover:scale-105"
    />

    {/* Mobile: name always visible at the bottom */}
    <div className="md:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-3">
      <span className="text-lg font-bold text-white tracking-wider">{item.name}</span>
    </div>

    {/* Desktop: hover overlay */}
    <div className="hidden md:flex absolute inset-0 flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-r from-[rgba(112,157,255,0.9)] to-[hsla(242,74%,61%,0.9)]">
      <span className="text-2xl font-bold text-white tracking-wider px-2">
        {item.name}
      </span>
      <span className="mt-8 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
        View
      </span>
    </div>
  </Link>
))}


</div>
      </div>
    </div>
  );
};

export default Work;
