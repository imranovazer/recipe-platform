import React from 'react'
import "./Home.css"
import SlideSection from '../../Components/swiperSlide/SlideSection'
function Home() {
  return (
    <div className='constainer'>
      <div className="header__section relative w-full h-screen bg-slate-50 ">
        <div className="header__cover absolute w-full h-full "></div>

        <div className="header__text relative z-10 h-full flex flex-col pt-36 sm:pt-[50%] lg:pt-0 lg:justify-center px-5 sm:pl-[50px] lg:pl-[200px]">
          <p className='text-5xl text-white my-2'>
            It is even better than
          </p>
          <p className='header__text__style text-3xl text-white'>
            an expensive cookery book
          </p>
        </div>

      </div>
      <SlideSection/>
    </div>
  )
}

export default Home