"use client";
import React, { useEffect } from 'react'
import Image from "next/image";
import Banner from "./Components/page";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function Home() {

 const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false } , [Autoplay()]) 

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) 
    }
  }, [emblaApi])

  return (
    <div>
     
     <div className="embla" ref={emblaRef}>
      <div className="embla__container">
     
     <div className="embla__slide">
      <Banner
        div1styles='flex flex-col items-center justify-center gap-10 h-[100vh] bg-[url("/max.jpg")] bg-cover bg-center '
        div2styles="bg-[#00000073] h-[100vh] w-full flex flex-col justify-center  pb-20 gap-10"
        div3styles="flex flex-col items-center justify-center gap-5 text-center mt-20"
        title1styles="text-8xl text-white font-black"
        title1="BORN TO"
        title2="EXPLORE"
        title2styles="text-8xl font-black text-[#C53030]"
        descriptionstyles="text-center text-2xl px-90 text-white"
        description="Discover the legendary Toyota Land Cruiser lineup. Where capability meets luxury, and every journey becomes an adventure."
        buttondivstyles="flex gap-3 justify-center items-center"
        button1styles="bg-[#c53030] px-10 py-5 text-white rounded-lg"
        button1text="Explore Models"
        button2styles="bg-transparent border-2 border-white px-10 py-4.5 text-white rounded-lg"
        button2text="Schedule Test Drive"
      />
    
    </div >
    <div className="embla__slide">
      <Banner
        div1styles='flex flex-col items-center justify-center gap-10 h-[100vh] bg-[url("/popo.png")] bg-cover bg-center '
        div2styles="bg-[#00000093] h-[100vh] w-full flex flex-col justify-center items-center gap-10 pb-20"
        div3styles="flex flex-col items-center justify-center gap-5 text-center mt-20"
        title1styles="text-8xl text-white font-black"
        title1="BORN TO"
        title2="PROTECT"
        title2styles="text-8xl font-black text-[#C53030]"
        descriptionstyles="text-center text-2xl px-60 text-white"
        description="For the Toyota Land Cruiser, protection isn’t an option it’s in its DNA. Built to safeguard adventurers, families, and pioneers, every detail is fortified with unwavering resolve."
        buttondivstyles="flex gap-3 justify-center items-center"
        button1styles="bg-[#c53030] px-10 py-5 text-white rounded-lg"
        button1text="Explore Models"
        button2styles="bg-transparent border-2 border-white px-10 py-4.5 text-white rounded-lg"
        button2text="Schedule Test Drive"
      />
    </div>

    <div className="embla__slide">

    <Banner
        div1styles='flex flex-col items-center justify-center gap-10 h-[100vh] bg-[url("/inside.jpg")] bg-cover bg-center'
        div2styles="bg-[#00000093] h-[100vh] w-full flex flex-col justify-center items-center gap-10 pb-20"
        div3styles="flex flex-col items-center justify-center gap-5 text-center mt-20"
        title1styles="text-8xl text-white font-black"
        title1="BORN TO"
        title2="LUXURY"
        title2styles="text-8xl font-black text-[#C53030]"
        descriptionstyles="text-center text-2xl px-60 text-white"
        description="Where Uncompromising Elegance Meets Unstoppable Capability. Crafted for Those Who Demand the Pinnacle of Sophistication, Yet Refuse to Sacrifice the Spirit of Adventure."
        buttondivstyles="flex gap-3 justify-center items-center"
        button1styles="bg-[#c53030] px-10 py-5 text-white rounded-lg"
        button1text="Explore Models"
        button2styles="bg-transparent border-2 border-white px-10 py-4.5 text-white rounded-lg"
        button2text="Schedule Test Drive"
      />

</div>

 <div className="embla__slide">
       <Banner
        div1styles='flex flex-col items-center justify-center gap-10 h-[100vh] bg-[url("/2024.jpg")] bg-cover bg-center'
        div2styles="bg-[#00000093] h-[100vh] w-full flex flex-col justify-center items-center gap-10 pb-35"
        div3styles="flex flex-col items-center justify-center gap-5 text-center mt-20"
        title1styles="text-8xl text-white font-black"
        title1="BORN TO"
        title2="BE WILD"
        title2styles="text-8xl font-black text-[#C53030]"
        descriptionstyles="text-center text-2xl px-40 text-white"
        description="Where the wild roams free, the Land Cruiser reigns. Built for the untamed spirit of the safari, its rugged heartbeat syncs with the pulse of the wilderness. Elephant trails or river crossings, scorching savannahs or dust-clouded plainsevery bolt, every curve is crafted for conquest. This isn’t just a vehicle; it’s your guide to the raw soul of adventure. The wild calls. Answer in a Land Cruiser."
        buttondivstyles="flex gap-3 justify-center items-center"
        button1styles="bg-[#c53030] px-10 py-5 text-white rounded-lg"
        button1text="Explore Models"
        button2styles="bg-transparent border-2 border-white px-10 py-4.5 text-white rounded-lg"
        button2text="Schedule Test Drive"
      />
    </div>
    
    </div>
    </div>
    </div>
  );
}
