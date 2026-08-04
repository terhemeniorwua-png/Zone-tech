
import brain1 from '../assets/images/brain1.png'
import brain2 from '../assets/images/brain2.png'
import brain3 from '../assets/images/brain3.png'


function MasterBrain(){

    return(
        <>
        <div>
            <h2 className='pt-20 pb-5 font-bold text-blue-950'>Our Master <span className='text-orange-400'>Brains</span></h2>
            <p className='md:w-[70%] text-center m-auto pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur repellendus consequatur, veniam laudantium laboriosam libero cupiditate a expedita ut praesentium voluptate? Sit sequi nesciunt adipisci sunt repellat consectetur vero.</p>
        </div>
        <div className='grid-cols-3 gap-5 max-md:space-y-10 md:px-20 md:grid'>
            <div className="card">
                <div>
                    <img src={ brain1 } alt="" className='m-auto rounded-full'/>
                </div>
                <h4 className='font-semibold'>John Martinus</h4>
                <p className='font-medium text-center'>CEO</p>
                
                <p className='pt-5 text-sm text-center text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic doloribus fugiat reiciendis sunt eveniet blanditiis eos minima tempora maxime</p>
            </div>

            <div className="card">
                <div>
                    <img src={ brain2 } alt="" className='m-auto rounded-full'/>
                </div>
                <h4 className='font-semibold'>John Martinus</h4>
                <p className='font-medium text-center'>Founder and CEO</p>
                
                <p className='pt-5 text-sm text-center text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic doloribus fugiat reiciendis sunt eveniet blanditiis eos minima tempora maxime</p>
            </div>

            <div className="card">
                <div>
                    <img src={ brain3 } alt="" className='m-auto rounded-full'/>
                </div>
                <h4 className='font-semibold'>John Martinus</h4>
                <p className='font-medium text-center'>Marketing Manager</p>
                
                <p className='pt-5 text-sm text-center text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic doloribus fugiat reiciendis sunt eveniet blanditiis eos minima tempora maxime</p>
            </div>
        </div>
        
         <h5 className='pt-12 font-bold max-md:text-sm max-md:pt-20'>
                    <i class="fa-solid fa-chevron-left pr-10"></i>
                    
                    <span className='text-5xl tracking-widest text-gray-500'>...... </span>
                    <i class="fa-solid fa-chevron-right"></i>
                </h5>
        
        </>
    );
}

export default MasterBrain