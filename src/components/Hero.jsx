
import heroimg from '../assets/images/heroimg.png'

function Hero(){

    return (
        <>
            <div className="grid grid-cols-2">

               <div>
                <h1 className='font-bold text-left text-blue-900 w-[80%] tracking-wider'>Create your Success
                       <p className='text-6xl text-orange-400'>Business</p>
                     </h1>
                     <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatibus est beatae, distinctio culpa ullam nostrum aliquid eum nesciunt laboriosam.</p>
                     <div className='px-5 py-2 text-white text-[15px] bg-orange-400 rounded-3xl w-[20%] mt-2'>
                        Explore
                     </div>
                </div> 
                
                <div className=''>
                    <div className='bg-black rounded-full h-72 w-72 opacity-20'></div>
                    <img src={ heroimg } alt="worker" className='w-[33%] absolute top-24'/>
                </div>
            </div>
        
        </>
    );
}

export default Hero