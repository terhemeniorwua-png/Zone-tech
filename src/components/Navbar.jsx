import logo from '../assets/images/logo.png'

function Navbar(){

    return (
        <header>
            <div className='text-[#000] font-semibold flex justify-between items-center'>
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