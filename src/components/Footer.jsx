import logo from '../assets/images/logo.png'

function Footer(){

    return (

        <>
        
        <footer>
            <div>
                <div>
                    <img src={ logo } alt="logo" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat debitis culpa provident dignissimos, voluptas est at dolorum dolores dolorem distinctio hic neque voluptatibus atque. Minus odit facilis ducimus enim voluptatem.</p>
                </div>

                <div>
                    <div>
                        <h3 className='text-orange-400 underline'>About Us</h3>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>How we work</li>
                            <li>Our Team</li>
                            <li>Customer</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                         <h3 className='text-orange-400 underline'>Location</h3>
                       <p>230, 3991 ipsum, dolor sit amet consectetur adipisicing elit. Suscipit amet nesciunt eligendi </p>

                       <p>230, 3991, ipsum dolor sit amet consectetur adipisicing elit exercitationem tempore.</p>
                    </div>
                      <div>
                         <h3 className='text-orange-400 underline'>Location</h3>
                       <ul>
                        <li>Contact me on: <a href="https://wa.me/09166354571" className='text-blue-700 hover:underline'>Whatsapp</a></li>
                        <li><a href="mailto:terhemeniorwua@gmail.com" className='text-blue-700 hover:underline'>terhemeniorwua@gmail.com</a></li>
                       </ul>
                    </div>
                </div>
            </div>
        </footer>
        
        
        </>
    )
}

export default Footer