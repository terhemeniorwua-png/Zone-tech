
import culturesimg from '../assets/images/cultures.png'


function Culture(){

    return(

        <>
            <div className='items-center grid-cols-2 pt-20 md:grid'>
                <div>
                    <img src={ culturesimg } alt="img" />
                </div>
                <div>
                    <h4 className='pb-5 text-xl font-bold textplaceholder-blue-900'>Culture of <span className='text-orange-400'> Our company</span></h4>
                    <p className='text-center'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laudantium ex natus voluptatem officiis accusantium distinctio architecto in nesciunt. Harum, nam perferendis deserunt aspernatur ex porro tempore commodi id quos.</p>
                </div>
            </div>
        </>
    )
}

export default  Culture