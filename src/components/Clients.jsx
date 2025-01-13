import { useEffect, useState } from "react"
import john from '/john.svg'
import edwin from '/edwin.svg'
import christina from '/christina.svg'
import iwaria from '/iwaria.svg'
import executivePro from '/executive-pro.svg'

function Clients() {
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(()=>{
    setTimeout(() =>{
      if (selectedTab === clients.length) {
        setSelectedTab(1)
      } else {
        setSelectedTab(selectedTab + 1)

      }
  }, 3000 )
  }, [selectedTab])

  const handleSelect = (id) => {
    setSelectedTab(id)
  }

  return (
    <div className='w-full lg:mb-[500px] px-5 lg:px-8 xl:px-[8%] pb-10 mt-20 relative'>
      <h2 className='text-[32px] lg:w-[800px] text-[700] sm:text-[24px] leading-[40px] lg:text-[44px] lg:leading-[48px] my-14 text-center mx-auto max-w-[90%]'>Discover the <span className="text-blue-400 ">transformative stories</span> of startups that scaled new heights with us</h2>
      <div className="flex flex-col gap-6">
      <div className="border  mx-auto w-full overflow-hidden border-blue-500 rounded-full">
          <ul className="flex  gap-20 justify-between w-full ">
            {/* map to display clients logos */}
            {clients.map((plan, idx) => (
              <button key={idx} onClick={() => handleSelect(idx+1)} className={`${selectedTab == idx+1 ? 'bg-[#0c2645] bg-opacity-60' : ''} ${selectedTab === 1? 'rounded-l-full' : ''} ${selectedTab === clients.length ? 'rounded-r-full' : ''} px-4 lg:px-7 py-3 font-bold text-[24px]`}>{plan.name}</button>
            ))}          
          </ul>
        </div>
        <div className="relative">
          {/* map to display clients content */}
        {clients.map((plan, idx) => (
              <div key={idx} className={`${selectedTab == idx + 1 ? 'flex' : 'hidden'} flex-col lg:flex-row gap-4 p-4 rounded-3xl lg:absolute lg:w-[600px] lg:h-[400px] duration-500 bg-[#0c2645]`} style={{left: `${idx *100}px`}}>
              <div className="flex flex-col w-full gap-4">
              <h2 className="font-bold text-xl">{plan.title}</h2>
              <p className='text-gray-300 font-[600] text-lg'>
              {plan.text}
              </p>
              <p className='text-gray-300 font-[700] text-md'>
              {plan.customer}, {plan.position}
              </p>
              </div>
              <div className={`w-full ${selectedTab == idx + 1 ? 'block' : 'hidden'} w-full h-full`}>
                <img  src={plan.img} alt={plan.name} className='object-contain h-full w-full max-w-none rounded-lg' />
              </div>
          </div>
            ))}  
      </div>
      </div>
    </div>
  )
}

export default Clients

// Arry of clients to simulate api response
const clients = [
  {
    name: "Starks",
    title: "Starks Associate",
    text: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
    position: "Management",
    customer: "John",
    img: john
  },
  {
    name: "ExecutivePros",
    title: "ExecutivePros",
    text: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
    position: "Co-Founder",
    customer: "Testimony",
    img: executivePro
  },
  {
    name: "Stac.ai",
    title: "Stac AI",
    text: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
    position: "Former, CTO",
    customer: "Edwin",
    img: edwin
  },
  {
    name: "Iwaria",
    title: "Iwaria",
    text: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
    position: "Founder",
    customer: "Iwaria",
    img: iwaria
  },
  {
    name: "Beaupreneur",
    title: "Beaupreneur",
    text: "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
    position: "Founder",
    customer: "Christina",
    img: christina
  },
]
