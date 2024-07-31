import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/mobimg1.jpg'
import img5 from '../assets/img5.jpg'

const Banner = () => {
  return (
    <div className="relative flex w-full h-[400px] mt-[50px] overflow-hidden border-[4px] border-whitesmoke rounded-[10px] bg-cover bg-center bg-[url('../assets/mobimg1.jpg')] md:bg-none md:h-[300px] lg:h-[300px] xl:h-[400px]">
      <img src={img1} alt="" className="absolute left-0 w-full h-full opacity-0 object-cover scale-[1.05] translate-y-[-100%] animate-img-animation" style={{ animationDelay: '0s' }} />
      <img src={img2} alt="" className="absolute left-0 w-full h-full opacity-0 object-cover scale-[1.05] translate-y-[-100%] animate-img-animation" style={{ animationDelay: '5s' }} />
      <img src={img3} alt="" className="absolute left-0 w-full h-full opacity-0 object-cover scale-[1.05] translate-y-[-100%] animate-img-animation" style={{ animationDelay: '10s' }} />
      <img src={img4} alt="" className="absolute left-0 w-full h-full opacity-0 object-cover scale-[1.05] translate-y-[-100%] animate-img-animation" style={{ animationDelay: '15s' }} />
      <img src={img5} alt="" className="absolute left-0 w-full h-full opacity-0 object-cover scale-[1.05] translate-y-[-100%] animate-img-animation" style={{ animationDelay: '20s' }} />
   
      <img src={img4} alt="" className="absolute left-0 w-full h-full object-cover scale-[1.05] md:hidden" />
    </div>
  )
}

export default Banner
