import { useState } from "react"
import Button from "./Button"
import launch from '/launch.svg'
import design from '/design.svg'
import develop from '/develop.svg'
import cameraMan from '/camera-man.svg'

function Steps() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleSelect = (id) => {
    setSelectedTab(id)
  }

  return (
    <div className='w-full px-5 lg:px-8 xl:px-[8%] pb-10 mt-20'>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 className='text-[32px] lg:w-[800px] text-[700] sm:text-[24px] leading-[40px] lg:text-[44px] lg:leading-[48px] mb-14 max-w-[90%]'>From <span className="text-blue-400 ">Spark</span> to <span className="text-blue-400 ">Spotlight</span>: we take you every step of the way to success.</h2>
      </div>
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-32">
      <div className="flex">
      <div className="flex w-full flex-col gap-10">
        <div className="border-2 p-3 border-blue-300 rounded-full">
          <ul className="flex gap-2 w-full">
            {plans.map((plan, idx) => (
              <button key={idx} onClick={() => handleSelect(idx+1)} className={`${selectedTab == idx+1 ? 'bg-blue-300 text-black rounded-full px-10' : ''} px-4 lg:px-7 py-3 font-bold `}>{plan.name}</button>
            ))}          
          </ul>
        </div>
        {plans.map((plan, idx) => (
              <div key={idx} className={`${selectedTab == idx + 1 ? 'flex' : 'hidden'} flex-col gap-10`}>
              <h2 className="font-bold text-3xl">{plan.title}</h2>
              <p className='text-gray-300 font-[600] text-lg'>
              {plan.text}
              </p>
          </div>
            ))}  
        <div className='w-32'>
        <Button icon='true' />
        </div>
      </div>
      </div>
      {plans.map((plan, idx) => (
        <div key={idx} className={`${selectedTab == idx + 1 ? 'block' : 'hidden'} w-full h-full`}>
        <img  src={plan.img} alt={plan.name} className='object-contain h-full w-full max-w-none rounded-lg' />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Steps

const plans = [
  {
    name: "Idea",
    title: "Your vision is unique.",
    text: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    img: cameraMan
  },
  {
    name: "Design",
    title: "Crafting the blueprint for success",
    text: "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    img: design
  },
  {
    name: "Develop",
    title: "Turning blueprints into reality.",
    text: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    img: develop
  },
  {
    name: "Launch",
    title: "Your launchpad to the market.",
    text: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    img: launch
  },
]
