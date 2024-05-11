

        import React from 'react'
        
        const Header = () => {
          return (
            <div className="header aeronikr p-10 flex justify-between items-center w-full">

                <div className='w-1/2 justify-start items-center flex gap-x-16'>

                    <h2 className="text-3xl aeronikr  ">Hematogenix </h2>

                      <button className="gap-x-4 flex justify-start group items-center">
                    <div className="h-14 w-14 flex-col gap-y-2   bg-transparent hover:px-3 transition-all ease duration-300 rounded-full flex justify-center items-center overflow-hidden group-hover:bg-white">

                      <span className="group-hover:w-6 w-16 transition-all ease duration-300 group-hover:bg-black h-0.5 bg-white rounded-md"></span>
                      <span className="group-hover:w-6 w-16 transition-all ease duration-300 group-hover:bg-black h-0.5 bg-white rounded-md"></span>

                    </div>

                    <span className="sm">Menu</span>
                    </button>

                </div>

                
                <div className='w-1/2 justify-end items-center flex gap-x-16'>

                  <button className="px-8 group py-1 justify-end items-center w-36 h-14  relative flex gap-x-2">

                      <span className="absolute scale-[0.7] translate-x-2 bg-black/20 transition-all ease duration-100 opacity-0 w-full  group-hover:opacity-100 h-full backdrop-blur-sm rounded-full group-hover:scale-100 ">  </span>
                      <span className="text-lg w-full flex transition-all ease-out duration-200 group-hover:opacity-100 opacity-0 group-hover:px-2  justify-center items-center translate-x-[20px] group-hover:translate-x-0 group-hover:text-white text-black ">search</span>
                    <div className='rounded-full  relative  min-w-10 h-10 flex justify-center items-center group-hover:bg-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='group-hover:text-black group-hover:scale-[0.7] transition-all ease duration-200 ' viewBox="0 0 24 24" width={30} height={30} color={"#ffffff"} fill={"none"}>
    <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
</div>
                  </button>

                </div>

            </div>
          )
        }
        
        export default Header