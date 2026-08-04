import logo from '../assets/images/logo.png'

function Footer(){

    return (

        <>
        
        <footer>
            <div className='grid-cols-2 pt-20 text-gray-400 max-md:w-[70%] max-md:pl-5 pb-20 md:grid'>
                <div>
                    <img src={ logo } alt="logo" className='md:w-[30%]'/>
                    <p className='text-sm text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat debitis culpa provident dignissimos, voluptas est at dolorum dolores dolorem distinctio hic neque voluptatibus atque. Minus odit facilis ducimus enim voluptatem.</p>
                </div>

                <div className='grid-cols-3 md:grid max-md:text-left max-md:pl-2 max-md:space-y-10'>
                    <div className='space-y-2 max-md:pt-10'>
                        <h3 className='font-semibold text-orange-400 underline '>About Us</h3>
                        <ul className='space-y-5 text-sm'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">How we work</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Customer</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className='space-y-5'>
                         <h3 className='font-semibold text-orange-400 underline '>Location</h3>
                       <p className='text-sm text-gray-400'>230, 3991 ipsum, dolor sit amet consectetur adipisicing elit. Suscipit amet nesciunt eligendi </p>

                       <p className='text-sm text-gray-400'>230, 3991, ipsum dolor sit amet consectetur adipisicing elit exercitationem tempore.</p>
                    </div>
                      <div className='space-y-5'>
                         <h3 className='font-semibold text-orange-400 underline '>Contact Us</h3>
                       <ul className='space-y-5 text-sm'>
                        <li>Contact me on: <a href="https://wa.me/09166354571" className='underline hover:text-blue-700'>Whatsapp</a></li>
                        <li>Mail me via: <a href="mailto:terhemeniorwua@gmail.com" className='underline hover:text-blue-700'>terhemeniorwua@gmail.com</a></li>
                       </ul>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className='h-5 bg-gray-800 w-[50%] m-auto'></div>
        </>
    )
}

export default Footer