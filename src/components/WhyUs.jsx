import icon from '/sact.png'
function WhyUs() {

  return (
    <div className='w-full px-5 lg:px-8 xl:px-[8%] pb-10 my-20'>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 className='text-[32px] sm:text-[24px] leading-[40px] lg:text-[44px] lg:leading-[48px] max-w-[90%] mx-auto text-blue-200 font-[600] text-center'>Your best call for B2B/B2C product innovation</h2>
      </div>
      <div className="grid gap-10 grid-cols-auto mx-auto mt-20 mb-10">
          <div className='flex flex-col relative gap-3 p-8 bg-[#02030f] rounded-2xl'>
              <div className='w-12 h-12'>
                <img src={icon} className="object-contain rounded-[8px] h-full w-full" alt="" />
              </div>
              <h2 className="font-bold text-2xl">Experience</h2>
              <p className='text-gray-300 text-lg'>
              Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.
              </p>
          </div>
          <div className='flex flex-col gap-3 p-8 bg-[#02030f] rounded-2xl'>
          <div className='w-12 h-12'>
                <img src={icon} className="object-contain rounded-[8px] h-full w-full" alt="" />
              </div>
              <h2 className="font-bold text-2xl">Quick Support</h2>
              <p className='text-gray-300 text-lg'>
              We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.
              </p>
          </div>
          <div className='flex flex-col gap-3 p-8 bg-[#02030f] rounded-2xl'>
          <div className='w-12 h-12'>
                <img src={icon} className="object-contain rounded-[8px] h-full w-full" alt="" />
              </div>
              <h2 className="font-bold text-2xl">Cost Savings</h2>
              <p className='text-gray-300 text-lg'>
              Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.
              </p>
          </div>
      </div>
    </div>
  )
}

export default WhyUs
