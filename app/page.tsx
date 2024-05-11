

"use client"
import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import image4 from "@/public/4.jpg";
import Image from 'next/image';
import Link from "next/link";
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
          imageSlides[0].style.filter = "grayscale(0%)";
          imageSlides[1].style.filter = "grayscale(100%)";
          imageSlides[2].style.filter = "grayscale(100%)";
          imageSlides[3].style.filter = "grayscale(100%)";
        }
        if (
          idelement === 1 &&
          imageSlides[idelement].classList.contains("active")
        ) {
          slideTxtBox.style.transform = "translateX(55%)";
          
          imageSlides[1].style.filter = "grayscale(0%)";
          imageSlides[0].style.filter = "grayscale(100%)";
          imageSlides[2].style.filter = "grayscale(100%)";
          imageSlides[3].style.filter = "grayscale(100%)";
        }
  
        if (
          idelement === 2 &&
          imageSlides[idelement].classList.contains("active")
        ) {
          slideTxtBox.style.transform = "translateX(107%)";
          
          imageSlides[2].style.filter = "grayscale(0%)";
          imageSlides[0].style.filter = "grayscale(100%)";
          imageSlides[1].style.filter = "grayscale(100%)";
          imageSlides[3].style.filter = "grayscale(100%)";
        }
        if (
          idelement === 3 &&
          imageSlides[idelement].classList.contains("active")
        ) {
          slideTxtBox.style.transform = "translateX(165%)";
          
          imageSlides[3].style.filter = "grayscale(0%)";
          imageSlides[0].style.filter = "grayscale(100%)";
          imageSlides[1].style.filter = "grayscale(100%)";
          imageSlides[2].style.filter = "grayscale(100%)";
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

            <div className='md:flex hidden  justify-center  gap-x-3  w-[75rem] items-center h-full'> 

                <div  className='w-[25rem] flex  flex-col  transition-all ease duration-300 overflow-hidden  imageSlide h-96 border-2 rounded-lg relative '>
                  <div className="absolute h-96 w-[45rem] overflow-hidden"> 
                    <Image src={image1} alt="image1" className=" h-96 w-[45rem] transition-none  z-0 object-cover" />
                    </div>
                    <div className="flex p-2 flex-col justify-end items-start h-full w-full z-10 absolute "> 
                      <div className="w-full  flex  py-4  justify-end items-center">
                        {idElement === 0 ? 
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                       <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                   </svg>: 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                      <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg> 
                    

                        }
                      </div>
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
                    <div className="w-full  flex  py-4  justify-end items-center">
                        {idElement === 1 ? 
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                       <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                   </svg>: 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                      <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg> 
                    

                        }
                      </div>
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
                    <div className="w-full  flex  py-4  justify-end items-center">
                        {idElement === 2 ? 
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                       <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                   </svg>: 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                      <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg> 
                    

                        }
                      </div>
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
                    <div className="w-full  flex  py-4  justify-end items-center">
                        {idElement === 3 ? 
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                       <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" strokeWidth="1.5" />
                   </svg>: 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                      <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg> 
                    

                        }
                      </div>
                    <div className="progressligne h-1 rounded-full  w-full  bg-gray-200/70 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-blue-500">
              </div>
            </div>

                    </div>
                </div>

                

             



            </div>
            <div className="md:flex  hidden w-[54rem] justify-start items-center  py-5">

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
                <div className="w-full pt-8 flex flex-col text-center gap-y-4 justify-center items-center">
        <h2 className="md:hidden flex text-balance font-bold max-w-sm">
          {" "}
          Animation disponible uniquement sur tablet , laptop et desktop{" "}
        </h2>
        <Link
          href={"https://bento.me/leoy"}
          className="px-4 py-1 underline  md:rounded-full text-center text-sm md:border md:border-blue-500"
        >
          {" "}
          Code By leonel YIMGA{" "}
        </Link>
      </div>

      </div>
    )
  }
  
  export default Page