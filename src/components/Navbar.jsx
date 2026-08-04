import logo from '../assets/images/logo.png'
import { useState } from 'react';

function Navbar(){
 
    const [isOpen , setIsOpen] = useState(false)
    
    return (
        <header>

        {/* { Hamburger } */}
        <div className='flex items-center justify-between md:hidden'>
            <div>
                   <img src={ logo } alt="Logo" className='p-0 w-44'/>
                </div>
            <div><i class="fa-solid fa-bars text-2xl pr-5" onClick={ (e)=>setIsOpen(!isOpen) }></i></div>
        </div>
        
        {/* Mobile Nav */}
      {
        isOpen && (
              <div className='bg-[#000000e5] right-0 top-20 py-5 leading-8 rounded-lg absolute w-full'>
            <ul className='font-semibold text-center text-white'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">How We Work</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
        </div>
        )
      }


            {/* Desktop Nav */}
            <div className='text-[#000] font-medium flex justify-between items-center max-md:hidden'>
                <div>
                   <img src={ logo } alt="Logo" className='p-0 w-44'/>
                </div>
                <nav>
                    <ul className='flex items-center justify-between gap-5 pr-5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">How We Work</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar