import background from '../assets/background.png'


const Background = () => {
    return(
        <div>
            <img src={background} className='w-full max-h-[600px] object-cover'/>
        </div>
    )
}

export default Background;
