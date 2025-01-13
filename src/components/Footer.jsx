import Socials from './Socials'
import logo from '/forcythe.svg'
function Footer() {

  return (
      <div className='mt-20 px-5 lg:px-8 xl:px-[8%]'>
        <div className='my-10 flex flex-col md:justify-around md:flex-row gap-20'>
            <form action="" className='flex w-full flex-col gap-4'>
                <div className='w-full flex justify-center flex-col relative'>
                <input className='bg-transparent border border-white py-[10px] px-4 rounded-full' type="email" required name="email" id="email" placeholder='Your Email Address' />
                <button className='absolute bg-white text-black font-[600] rounded-r-full h-full px-6 right-0' type="submit">Subscribe</button>
                </div>
                <div className='flex gap-3'>
                <input type="radio" name="agree" className='w-6' id="agree" />
                <label htmlFor="agree">I agree to receive other notifications from Forcythe</label>
                </div>
            </form>
            <div className='flex flex-col w-full gap-6'>
                <img src={logo} alt="forcythe brand logo" className="w-40" />
                <p>We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.</p>

                <div className='hidden md:flex'>
                <Socials />
                </div>               
            </div>
            <div className='flex flex-col w-[60%] gap-12'>
                <h2 className='font-bold text-2xl'>Company</h2>
                <ul className="flex flex-col gap-3 font-[600] text-base">

                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Foundation</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className='md:hidden'>
                <Socials />
            </div> 

        </div>
       <div className='sm:flex items-center justify-between border-t border-blue-400 mx-[10%] mt-12 py-6'>
        <p className="text-sm text-blue-400 text-opacity-90">Copyright &copy; 2024 Forcythe. All rights reserved.</p>
       </div>
      </div>
    )
}

export default Footer
