import { images } from '../utils/data'

function Testimonial() {

  return (
    <div className='w-full pb-10 scroll-mt-20'>
      <h2 className='text-[32px] sm:text-[24px] leading-[40px] lg:text-[44px] lg:leading-[48px] mb-12 max-w-[90%] mx-auto text-center'>Success in <span className="text-blue-400">Motion</span>  Our clients journey</h2>
      
      <div className="overflow-hidden flex space-x-8">
          {images.map((image, idx) => (
            <div key={idx} className='flex flex-col gap-10'>
                <div className="space-x-8 flex loopLeft">
                    <div className='h-[300px] w-[300px] relative'>
                        <div className='bg-blue-400 -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse'></div>
                        <div className='w-full h-full'>
                        <img  src={image.img} alt={image.text} className='object-cover h-full w-full max-w-none rounded-lg' />
                        </div>
                    </div>
                </div>
                <div className="space-x-8 flex loopRight">
                    <div className='h-[300px] w-[300px] relative'>
                        <div className='bg-blue-400 -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse'></div>
                        <div className='w-full h-full'>
                        <img  src={image.img} alt={image.text} className='object-cover h-full w-full max-w-none rounded-lg' />
                        </div>
                    </div>
                </div>
                
            </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonial
