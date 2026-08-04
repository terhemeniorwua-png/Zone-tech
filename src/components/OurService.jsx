import beneath from '../assets/images/beneath.png'
import nasa from '../assets/images/nasa.png'

function OurService(){

    return(
        <>
            <div>
                <h4 className="pt-10 text-xl font-semibold text-blue-900">Our 
                <span className="text-orange-400"> Service</span>
                </h4>
                <p className=" md:w-[70%] text-center m-auto pt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati similique dolor! Quam, reprehenderit quod sint ratione fuga distinctio sapiente similique deserunt expedita at possimus, delectus consectetur unde accusantium est.</p>
            </div>

            <div className='grid-cols-2 pt-20 max-md:space-y-24 md:gap-10 md:px-20 md:grid '>
               <div className='relative'>
                 <div className='card'>
                    <img src={ beneath } alt="logo" className='m-auto'/>
                    <h2>Shopify Development</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore numquam enim, beatae ex necessitatibus officiis odio harum neque quisquam perferendis dolore saepe quaerat earum nemo vero blanditiis provident dolorem veniam.</p>
                   
                    <div className='px-5 py-2 font-bold border-2 md:w-[35%] mt-5 m-auto rounded-2xl'>Read more</div>
                </div>
                <img src={ beneath } alt="img" className='absolute -bottom-10 -z-30'/>
               </div>

                <div className='relative'>
                     <div className='card'>
                    <img src={ nasa } alt="logo" className='m-auto'/>
                    <h2>Shopify Development</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore numquam enim, beatae ex necessitatibus officiis odio harum neque quisquam perferendis dolore saepe quaerat earum nemo vero blanditiis provident dolorem veniam.</p>
                   
                    <div className='px-5 py-2 font-bold border-2 md:w-[35%] mt-5 m-auto rounded-2xl'>Read more</div>
                </div>
                <img src={ nasa } alt="img"  className='absolute -bottom-10 -z-30'/>
                </div>
            </div>
                
               
        </>
    )
}

export default OurService