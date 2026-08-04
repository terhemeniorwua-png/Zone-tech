import hero from '../assets/images/heroimg.png'
import contact from '../assets/images/contactImg.png'


function ContactUs(){

    return (

        <>
            <div className='md:w-[70%] m-auto pt-20'>
                <h2 className='font-bold text-blue-950'>Contact <span className='text-orange-400'>Us</span></h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio inventore eos quasi nam dolorum. Quis tempore dolorem eum aperiam laboriosam? Itaque commodi vero nobis unde. Enim numquam corporis vitae quo?
            </div>

            <div className='items-center grid-cols-2 gap-10 mt-16 md:grid'>
                <div className='relative'>
                    <img src={ hero } alt="" className='ml-44 blur-sm size-64 max-md:hidden'/>
                  <div  className='md:absolute max-md:mb-10 pb-2
                   md:bottom-0.5 bottom-10 md:left-52 border left-24 md:w-[60%] bg-white rounded-2xl'>
                      <img src={ contact } alt="img" className='px-5'/>
                      <div className='flex items-center justify-between px-5'>
                        <h5>Contact Us</h5>
                        <p className='px-5 py-1 text-white bg-orange-400 rounded-2xl'>Message</p>
                      </div>
                  </div>
                </div>
                <div>
                    <form action="">
                       <div className='flex flex-col gap-2 px-5 md:px-20'>
                         <input type="text" name="" id="" placeholder='Full Name' className='p-2 bg-white border'/>

                         <input type="email" name="" id="" placeholder='Email address' className='p-2 bg-white border'/>

                         <input type="text" name="" id="" placeholder='Subject' className='p-2 bg-white border'/>

                         <textarea name=""  className='p-2 bg-white border' placeholder='Message' id=""></textarea>
                       </div>
                    </form>
                </div>
            </div>
        
        </>
    )
}

export default ContactUs