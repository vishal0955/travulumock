// 'use client';
// import { useState } from 'react';
// import React from 'react'
// import Image from 'next/image'
// const Header = () => {

//     const [open, setOpen] = useState(false);
//   return (
//   <div className=" bg-[#014569]  h-[85px] px-[175px] py-2 gap-2.5">
//     <div className='max-w-8xl ml-auto px-4'>
//     <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2.5 gap-2.5">
        
//             <Image src="/logo.png" alt="logo" width={152} height={65} className="my-auto "/>
        

//         <div className="hidden md:flex items-center justify-between  ml-auto space-x-4 gap-0.25">
//             <p className='font-raleway font-bold'>Arlo AI</p>

//             <p className='text-[#E8F3FB]'>Arlo AI</p>
//             <p className='text-[#E8F3FB]'>Arlo AI</p>
//             <p className='text-[#E8F3FB]'>Arlo AI</p>
//             <p className='text-[#E8F3FB]'>Arlo AI</p>
//             <button className='bg-[#E8F3FB] text-[#003b5c] '>Log In</button>

             
       
//         </div>
// <div className="md:hidden">
//          <button className="" onClick={() => setOpen(!open)}>
//              {open ? <p className='text-[#E8F3FB]'>X</p> : <p className='text-[#E8F3FB]'>Y</p>}

//              {
//                 open && (
//                     <div className="md:hidden bg-[#003b5c]  space-y-4">
//                     <p className=' text-[#E8F3FB]'>ArloAI</p>
//                     <p className='block text-[#E8F3FB]'>Flights</p>
//                     <p className='block text-[#E8F3FB]'>Hotels</p>
//                     <p className='block text-[#E8F3FB]'>About</p>
//                     <p className='block text-[#E8F3FB]'>Blog</p>
//                     </div>
//                 )
//              }
//           </button>

//           </div>
      
//     </div>
//     </div>
//   </div>  

    
//   )
// }

// export default Header;

'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 w-full bg-primary h-[70px] md:h-[85px] z-50 px-4 md:px-[175px] flex items-center">

      <div className=" w-full mx-auto mt-auto">
        <div className="flex items-center justify-between py-2.5 ">
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={152} 
            height={65} 
            className="  max-w-[152px] md:max-w-[152px]"
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between ml-auto space-x-4 gap-0.25">
            <p className=' text-[#FF914D]  '>Arlo 
              <span className="text-orange-400 font-semibold   relative ml-1">
    AI
    
    <span className="absolute -top-1.5 -right-3 text-[12px]">
              <Image src='/noto_dim-button.png' alt='dim button' width={12} height={12} className=""/>
    </span>
    </span>
               </p>
            <p className='text-[#E8F3FB]'>Flights</p>
            <p className='text-[#E8F3FB]'>Hotels</p>
            <p className='text-[#E8F3FB]'>About</p>
             <p className='text-[#E8F3FB]'>Blog</p>
             <>
             <Image src="/iconamoon_profile-circle-fill.png" alt="profile" width={24} height={24} className="inline-block mr-2" />
            <button className='text-[#E8F3FB]'>
              Log In
            </button>
            </>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#E8F3FB] p-2 focus:outline-none" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block w-full h-0.5 bg-[#E8F3FB] transform transition-transform duration-300 ${open ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}`}></span>
              <span className={`absolute block w-full h-0.5 bg-[#E8F3FB] transform transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100 translate-y-2.5'}`}></span>
              <span className={`absolute block w-full h-0.5 bg-[#E8F3FB] transform transition-transform duration-300 ${open ? '-rotate-45 translate-y-2.5' : 'translate-y-5'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-primary border-tmt-2 py-4 transition-all duration-300">
            <div className="flex flex-col space-y-3">
              <p className='text-[#FF914D] px-4 py-2 rounded cursor-pointer'>Arlo 
              <span className="text-orange-400 font-semibold   relative ml-1">
    AI
    
    <span className="absolute -top-1.5 -right-3 text-[12px]">
              <Image src='/noto_dim-button.png' alt='dim button' width={12} height={12} className=""/>
              </span>
              </span>
              </p>
              <p className='text-[#E8F3FB] px-4 py-2  rounded cursor-pointer'>Features</p>
              <p className='text-[#E8F3FB] px-4 py-2  rounded cursor-pointer'>Solutions</p>
              <p className='text-[#E8F3FB] px-4 py-2  rounded cursor-pointer'>Pricing</p>
              <p className='text-[#E8F3FB] px-4 py-2  rounded cursor-pointer'>About</p>
             <div className='flex'>
             <Image src="/iconamoon_profile-circle-fill.png" alt="profile" width={24} height={24} className="inline-block mr-2" />
            <button className='text-[#E8F3FB]'>
              Log In
            </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

