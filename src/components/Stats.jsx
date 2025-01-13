function Stats() {

  return (
    <div className='w-full flex items-center justify-center mx-auto px-5 lg:px-8 xl:px-[8%] mb-32'>
      <div className="text-center flex flex-col items-center justify-center lg:w-[1000px] lg:h-[500px] lg:justify-start lg:bg-[url('/curve.png')] lg:bg-no-repeat lg:bg-contain lg:pt-60 relative">
      <h2 className='text-xl lg:w-[700px] px-20 md:text-2xl lg:text-3xl font-[600]'>We build solutions that help <span className="text-blue-400 ">businesses</span> of all sizes to <span className="text-blue-400">scale</span></h2>
      <div className="flex mt-8 items-center gap-6 justify-center">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[28px] text-blue-400 sm:text-[32px] md:text-[45px] font-[600]">50+</span>
          <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden">Clients</span>
        </div>
        <div className="flex flex-col gap-1 text-left w-fit">
        <span className="text-[28px] text-blue-400 sm:text-[32px] md:text-[45px] font-[600]">120+</span>
          <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden">Projects</span>
        </div>
        <div className="flex flex-col gap-1 text-left w-fit">
        <span className="text-[28px] text-blue-400 sm:text-[32px] md:text-[45px] font-[600]">10+</span>
          <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden">Team Leads</span>
        </div>
        <div className="flex flex-col gap-1 text-left w-fit">
        <span className="text-[28px] text-blue-400 sm:text-[32px] md:text-[45px] font-[600]">10+</span>
          <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden">Glorious Years</span>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Stats
