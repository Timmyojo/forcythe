
function Button({icon}) {
  return (
    <>
        <div className='relative group w-fit h-[40px]'>
            <a className="w-full px-3 py-3 rounded-full ml-4 bg-white text-black text-base relative z-10 font-semibold flex justify-center items-center gap-2 group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap duration-500 cursor-pointer hover:shadow-md ">Book a Call
           {icon &&  <svg viewBox="-3 0 28 28" className="w-3 h-3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#000000" className="group-hover:fill-white duration-500"> <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>}
            </a>
            <div className='w-full h-full absolute top-[16px] -right-[10px] rounded-full border-[1px] border-dashed duration-500 group-hover:border-[#064386]'></div>
        </div>
    </>
  )
}

export default Button
