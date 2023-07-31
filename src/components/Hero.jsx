import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { profile } from '../assets'
function Hero() {
  return (
    <div
      className={`${styles.padding} flex flex-col-reverse md:flex-row text-white w-full max-w-7xl mx-auto`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-start mt-[16vw]">
          <p className="text-[3vw] font-sub-text font-bold">Hii!! I am,</p>
          <p className="text-[6vw] text-[#735F32] font-signature font-bold mt-[-2vw] ml-[8vw]">
            Deepanshu
          </p>
          <p className="text-[3vw] text-[#735F32] font-sub-text font-bold mt-[-2vw] ml-[24vw]">
            Tyagi.
          </p>
        </div>
        <p className='max-w-xl text-[1.2vw]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores deserunt laborum? Reiciendis veniam ad maxime velit labore, aspernatur aliquam ipsa perspiciatis, fuga vitae delectus rem nesciunt impedit, beatae officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga distinctio error, assumenda doloremque enim sint, eos nam reiciendis nulla sunt corporis voluptatibus eveniet fugiat accusamus numquam porro ducimus impedit. lore
        </p>
      </div>
      <img
        src={profile}
        alt='profile'
        className='max-w-md max-h-md w-[22vw]'
      />
    </div>
  )
}
export default Hero
