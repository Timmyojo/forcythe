import { useState } from "react"

function Tabs({data}) {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleSelect = (id) => {
    setSelectedTab(id)
  }

  return (
    <div className='w-full px-5 lg:px-8 xl:px-[8%] pb-10 mt-20'>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 className='text-[32px] lg:w-[800px] text-[700] sm:text-[24px] leading-[40px] lg:text-[44px] lg:leading-[48px] mb-12 max-w-[90%]'>From <span className="text-blue-400 ">Spark</span> to <span className="text-blue-400 ">Spotlight</span>: we take you every step of the way to success.</h2>
      </div>
      <div className="flex">

      <div className="flex w-full flex-col gap-10">
        <div className="border-2 p-3 border-blue-300 rounded-full">
          <ul className="flex gap-2 w-full">
            <button onClick={() => handleSelect(1)} className="px-6 py-3 font-bold">Idea</button>
            
            <button onClick={() => handleSelect(2)} className="px-6 py-3 font-bold">Design</button>
            
            <button onClick={() => handleSelect(3)} className="px-6 py-3 font-bold">Develop</button>
            
            <button onClick={() => handleSelect(4)} className="px-6 py-3 font-bold">Launch</button>
            
          </ul>
        </div>
        <div className={`${selectedTab == 1 ? 'flex' : 'hidden'} flex-col gap-10`}>
          <h2 className="font-bold text-3xl">Your vision is unique.</h2>
          <p className='text-gray-300 font-[600] text-lg'>
          Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.
          </p>
      </div>
        <div className={`${selectedTab ==2 ? 'flex' : 'hidden'} flex-col gap-10`}>
          <h2 className="font-bold text-3xl">Crafting the blueprint for success</h2>
          <p className='text-gray-300 font-[600] text-lg'>
          Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.
          </p>
      </div>
        <div className={`${selectedTab == 3 ? 'flex' : 'hidden'} flex-col gap-10`}>
          <h2 className="font-bold text-3xl">Turning blueprints into reality.</h2>
          <p className='text-gray-300 font-[600] text-lg'>
          We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.
          </p>
      </div>
        <div className={`${selectedTab == 4 ? 'flex' : 'hidden'} flex-col gap-10`}>
          <h2 className="font-bold text-3xl">Your launchpad to the market.</h2>
          <p className='text-gray-300 font-[600] text-lg'>
          Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.
          </p>
      </div>
        <div className='w-32'>
        <Button />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tabs
