import Button from "./Button"

function Hero() {

  return (
    <div>
      <div className='w-full px-5 lg:px-8 xl:px-[8%] mx-auto py-28 pb-24 flex flex-col justify-center gap-4'>
        <div className="w-full flex flex-col gap-8 bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:pl-10 lg:pr-40 rounded-[32px] sm:rounded-3xl">
        <h1 className='text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1]'>
        We build <span className="text-blue-400 ">products</span> that shape a better future
        </h1>
        <p className='text-lg mb-2'>We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.</p>
        <div className='w-32'>
          <Button icon='true'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
