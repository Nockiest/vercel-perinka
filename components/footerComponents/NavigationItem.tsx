
import Link from 'next/link';


const NavigationItem = ({ href, label }) => (
  <Link className='w-full' href={href}>
    <div className="relative w-full bg-transparent opacity-80 group-hover:opacity-100 transition-all duration-300 mb-12 pl-4 group">
      <div className="border-l-secondary-color-80-2 w-full  rounded-full  xl:rounded-r-none px-2 py-1 absolute bg-primary-color group-hover:z-10 group-hover:scale-110 transform origin-top-left transition-all duration-300">
        <span className="block h-8 text-white transition-all duration-300 group-hover:text-gray-800 transform scale-110 origin-top-left">
          {label}
        </span>
      </div>
    </div>
  </Link>
);

export default NavigationItem;
