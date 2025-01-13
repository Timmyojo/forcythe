import menu from '/menu.png'
import logo from '/forcythe.svg'
import { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMobileMenu = () => {
    if (sideMenuRef.current.style.transform == "translateX(-16rem)") {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    } else {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
  }

  const closeMobileMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (scrollY > 50) {
        setIsScroll(true);
      } else{
        setIsScroll(false)
      }
    })
  }, [isScroll])

  return (
    <>
     <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-8 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-5 backdrop-blur-lg shadow-md" : ""}`}>
      <div className='flex gap-20 items-center'>
      <a href="/">
      <img src={logo} alt='forcythe brandlogo' className='w-28 cursor-pointer'/>
      </a>
      <ul className={`hidden md:flex items-center justify-between text-base gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-transparent shadow-sm bg-opacity-50"}`}>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Foundation</a></li>
      </ul>
      </div>
      <div>
        <div className='relative group'>
            <a className="hidden w-full lg:flex items-center gap-3 px-5 py-3 rounded-full ml-4 bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap duration-500 cursor-pointer hover:shadow-md ">Book a Call
            </a>
            <div className='hidden md:block w-full h-full absolute top-[8px] right-[-10px] z-0 rounded-full border-[1px] border-dashed duration-500 group-hover:border-[#064386]'></div>
        </div>
        <button onClick={openMobileMenu} className='block md:hidden bg-white bg-opacity-10 rounded-md p-3 cursor-pointer'>
          <img src={menu} alt="" className="w-6 rotate-180" />
        </button>
      </div>

      <ul ref={sideMenuRef} className="mobile-menu-bg flex md:hidden flex-col gap-5 px-6 py-10 absolute text-base translate-x-80 -right-[236px] rounded-[40px] top-[120px] bottom-0 w-64 z-50 h-fit text-white transition duration-500">

        <li><a onClick={closeMobileMenu} href="#">About</a></li>
        <li><a onClick={closeMobileMenu} href="#">Services</a></li>
        <li><a onClick={closeMobileMenu} href="#">Portfolio</a></li>
        <li><a onClick={closeMobileMenu} href="#">Studio</a></li>
        <li><a onClick={closeMobileMenu} href="#">Foundation</a></li>
        <li><a onClick={closeMobileMenu} href="#">Careers</a></li>
        <li><a onClick={closeMobileMenu} href="#">Blog</a></li>
      </ul>
     </nav>
    </>
  )
}

export default Navbar
