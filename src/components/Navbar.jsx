import logo from '../assets/images/logo.png'

function Navbar(){

 const handleMobileNav = (e) =>{
    let clicked = e.target; 
    if(clicked){
        clicked.classList.toggle('')
    }
    clicked.classList.includes('hidden') && 'X'
 }



    

    return (
        <header>

        {/* Mobile Nav */}
        <div className='flex items-center justify-between md:hidden'>
            <div>
                   <img src={ logo } alt="Logo" className='p-0 w-44'/>
                </div>
            <div><i class="fa-solid fa-bars text-2xl pr-5" onClick={ (e)=>handleMobileNav(e) }></i></div>
        </div>
        
        <div className='bg-[#000000] py-5 leading-8 rounded-lg hidden'>
            <ul className='font-semibold text-center text-white'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>How We Work</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
        </div>


            {/* Desktop Nav */}
            <div className='text-[#000] font-medium flex justify-between items-center max-md:hidden'>
                <div>
                   <img src={ logo } alt="Logo" className='p-0 w-44'/>
                </div>
                <nav>
                    <ul className='flex items-center justify-between gap-5 pr-5'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>How We Work</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar