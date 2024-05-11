

"use client"
import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import image4 from "@/public/4.jpg";
import Image from 'next/image';
import { useEffect, useState } from 'react';
  const Page = () => {
    
    let [idElement,setIdElement] = useState<number | null>(0);

    useEffect(()=>{

      const progressbarre = document.querySelectorAll(".progressbarre") as NodeListOf<HTMLDivElement> 
      const progressligne = document.querySelectorAll(".progressligne") as NodeListOf<HTMLDivElement> 
      const slideTxtBox = document.querySelector(".slideTxtBox") as HTMLDivElement
      const imageSlides = document.querySelectorAll(".imageSlide") as NodeListOf<HTMLDivElement> 


      const SlideEvent = (idelement: number) => {
        if (
          idelement === 0 &&
          imageSlides[idelement].classList.contains("active")
        ) {
          slideTxtBox.style.transform = "translateX(0%)";
        }
        if (
          idelement === 1 &&
          imageSlides[idelement].classList.contains("active")
        ) {
          slideTxtBox.style.transform = "translateX(55%)";
        }
  
        if (
          idelement === 2 &&
          imageSlides[idelement].classList.contains("active")
        ) {
          slideTxtBox.style.transform = "translateX(107%)";
        }
        if (
          idelement === 3 &&
          imageSlides[idelement].classList.contains("active")
        ) {
          slideTxtBox.style.transform = "translateX(165%)";
        }
      };
  
  


   


      const moveProgression = async (idelement:number) => {
        return new Promise<void>((resolve) => {
       let currentWidth = 0;

       imageSlides[idelement].classList.add("active") 


       setIdElement(idelement)


        const  intervalId  =  setInterval(()=>{
          
          currentWidth += 1;
          // slideMouv(idelement)
          progressbarre[idelement].style.width = currentWidth + "%"
          
          imageSlides[idelement].style.width = "25rem";
        
          if (currentWidth >= 100) {
            clearInterval(intervalId);
            resolve();
            progressbarre[idelement].style.width = 0 + "%"
          
            
          imageSlides[idelement].style.width = "9rem";
          imageSlides[idelement].classList.remove("active")

          }
        },3000/100)
        SlideEvent(idelement)
        
      });
        
      }

      let shouldRun = true;
      let idelement = 0;


      const UpdateProgression = async () => {
        while (shouldRun) {
          await moveProgression(idelement);
          idelement = (idelement + 1) % progressligne.length;
        }
      }

      

      UpdateProgression()

     

      return () => {
        shouldRun = false;
      };

    },[])


    return (


      <div className="flex flex-col relative min-h-screen  text-black justify-center h-full items-center w-full">

            <div className='flex justify-center   gap-x-3  w-[75rem] items-center h-full'> 

                <div  className='w-[25rem] flex  flex-col  transition-all ease duration-300 overflow-hidden  imageSlide h-96 border-2 rounded-lg relative '>
                  <div className="absolute h-96 w-[45rem] overflow-hidden"> 
                    <Image src={image1} alt="image1" className=" h-96 w-[45rem] transition-none  z-0 object-cover" />
                    </div>
                    <div className="flex p-2 flex-col justify-end items-start h-full w-full z-10 absolute "> 

                    <div className="progressligne h-1 rounded-full  w-full  bg-gray-200/70 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-blue-500">
              </div>
            </div>

                    </div>
                </div>


                <div  className='w-36 flex  flex-col  transition-all ease duration-300 overflow-hidden  imageSlide h-96 border-2 rounded-lg relative '>
                  <div className="absolute h-96 w-[45rem] overflow-hidden"> 
                    <Image src={image2} alt="image1" className=" h-96 w-[45rem] transition-none  z-0 object-cover" />
                    </div>
                    <div className="flex p-2 flex-col justify-end items-start h-full w-full z-10 absolute "> 

                    <div className="progressligne h-1 rounded-full  w-full  bg-gray-200/70 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-blue-500">
              </div>
            </div>

                    </div>
                </div>


                <div  className='w-36 flex  flex-col  transition-all ease duration-300 overflow-hidden  imageSlide h-96 border-2 rounded-lg relative '>
                  <div className="absolute h-96 w-[45rem] overflow-hidden"> 
                    <Image src={image3} alt="image1" className=" h-96 w-[45rem] transition-none  z-0 object-cover" />
                    </div>
                    <div className="flex p-2 flex-col justify-end items-start h-full w-full z-10 absolute "> 

                    <div className="progressligne h-1 rounded-full  w-full  bg-gray-200/70 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-blue-500">
              </div>
            </div>

                    </div>
                </div>

                <div className='w-36 flex  flex-col  transition-all ease duration-300 overflow-hidden  imageSlide h-96 border-2 rounded-lg relative '>
                  <div className="absolute h-96 w-[45rem] overflow-hidden"> 
                    <Image src={image4} alt="image1" className=" h-96 w-[45rem] transition-none  z-0 object-cover" />
                    </div>
                    <div className="flex p-2 flex-col justify-end items-start h-full w-full z-10 absolute "> 

                    <div className="progressligne h-1 rounded-full  w-full  bg-gray-200/70 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-blue-500">
              </div>
            </div>

                    </div>
                </div>

                

             



            </div>
            <div className="flex  w-[54rem] justify-start items-center  py-5">

                  <div className="w-72  transition-all ease duration-300  slideTxtBox   flex  gap-y-4 flex-col">
                      
                      { idElement === 0 && 
                      <div className="flex flex-col gap-y-4">
                      <h2 className="font-bold"> Omnichannel Order Orchestration of +5,000 daily orders </h2>
                      <p className="text-sm">
                      Makro PRO uses Medusa to orchestrate over 180,000 orders and more than $300M in GMV yearly.
                      </p>
                      </div>
                      }

                { idElement === 1 && 
                      <div className="flex flex-col gap-y-4">
                      <h2 className="font-bold">70% conversion increase, +50 markets and a POS for retail </h2>
                      <p className="text-sm">
                      Tekla uses Medusa to power its omnichannel operations and managed to scale globally at record speeds.
                      </p>
                      </div>
                      }


                { idElement === 2 && 
                      <div className="flex flex-col gap-y-4">
                      <h2 className="font-bold"> Building a custom marketplace experience
 </h2>
                      <p className="text-sm">
                      Foraged allows over 1,000 local sellers to market wild and specialty foods to home cooks and Michelin-starred restaurants.
                      </p>
                      </div>
                      }

{ idElement === 3 && 
                      <div className="flex flex-col gap-y-4">
                      <h2 className="font-bold"> Frictionless B2B customer experience</h2>
                      <p className="text-sm">
                      Visionary Technologies built a digital customer journey and automated their commerce operations for B2B customers.
                      </p>
                      </div>
                      }
                      

                  </div>
               


                </div>

      </div>
    )
  }
  
  export default Page