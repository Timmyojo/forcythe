import Button from './Button'

function CallToAction() {

  return (
    <div className='w-full lg:w-1/2 mx-auto pb-10 flex flex-col justify-center items-center text-center scroll-mt-20'>
      <div className='text-[34px] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] p-3 lg:text-[2.6rem] lg:leading-[3rem] mb-6'><span className="text-blue-400">Ready to Scale?</span> 
        <p>
        Join successful brands that chose us as their <span className="text-blue-400">growth accelerator</span>
        </p>
        </div>
        <div className='w-32'>
        <Button />
        </div>
    </div>
  )
}

export default CallToAction
