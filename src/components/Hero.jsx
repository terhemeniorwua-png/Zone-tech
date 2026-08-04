
import heroimg from '../assets/images/heroimg.png'
import dell from '../assets/images/dell.png'
import eye from '../assets/images/eye.png'
import circle from '../assets/images/circle.png'
import northface from '../assets/images/nothface.png'
import nasa from '../assets/images/nasa.png'
import huawi from '../assets/images/huawi.png'


function Hero(){

    return (
        <>
            <div className="grid-cols-2 md:grid">

               <div>
                <h1 className='font-bold md:text-left text-blue-900 md:w-[80%] tracking-wider'>Create your Success
                       <p className='text-5xl text-center text-orange-400 md:text-left'>Business</p>
                     </h1>
                     <p className='md:w-[80%] max-md:mb-10 max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatibus est beatae, distinctio culpa ullam nostrum aliquid eum nesciunt laboriosam.</p>
                     <div className='max-md:m-auto px-5 py-2 text-white text-[15px] bg-orange-400 rounded-3xl md:w-[20%] md:mt-2'>
                        Explore
                     </div>
                </div> 
                
                <div className=''>
                    <div className='m-auto bg-black rounded-full md:ml-16 max-md:mt-5 h-72 w-72 opacity-20'></div>
                    <img src={ heroimg } alt="worker" className='w-[90%] -bottom-40 md:w-[33%] absolute  md:top-24'/>
                </div>
            </div>
            
            <div>
                <h5 className='pt-12 font-bold max-md:text-sm max-md:pt-20'>
                    <i class="fa-solid fa-chevron-left"></i>
                    
                    <span>Trusted by <span className='text-orange-400'>100+ Companies</span> Worldwide </span>
                    <i class="fa-solid fa-chevron-right"></i>
                </h5>
                
                <div className='grid justify-center grid-cols-3 gap-10 pt-10 gap md:flex '>
                    <img src={ dell } alt="dell" />
                    <img src={ eye } alt="eye" />
                    <img src={ circle } alt="circl" />
                    <img src={ northface } alt="northface" />
                    <img src={ nasa } alt="nasa" />
                    <img src={ huawi } alt="huawi" />
                </div>


            </div>
        
        </>
    );
}

export default Hero