import { contact, linkedIn, github, twitter, menuOp, menuCl } from '../assets'
import { useState } from 'react'
function NavBar({}) {
  const [menu, setMenu] = useState(false)
  return (
    <nav className="w-full z-[99]">
      <div className="flex items-center px-6 py-4 w-full bg-black opacity-100">
        <div className=" w-full flex items-center justify-between max-w-5xl mx-auto border-b-2 border-[#242424] pb-4">
          <div className="flex justify-center items-center cursor-pointer">
            <img
              src={contact}
              alt="logo"
              className="w-[50px] h-[50px] sm:w-[59px] sm:h-[59px] rounded-full object-contain hover:scale-110 transition-transform shadow-md"
            />
            <p className="ml-3 text-gray-400 font-bold text-[16px] font-heading hover:text-white transition-colors">
              Deepanshu
            </p>
          </div>
          <div className="gap-2 sm:gap-4 px-2 sm:px-6 py-4 items-center justify-center text-gray-400 font-bold text-[16px] font-heading transition-colors flex md:hidden ">
            <a
              className="cursor-pointer hover:text-white "
              href="https://www.linkedin.com/in/deepanshu-tyagi-2765a9211/"
              target="_blank"
            >
              <img
                src={linkedIn}
                alt="LinkedIn"
                className="w-6 h-6 object-cover cursor-pointer"
              />
            </a>
            <p className="">/</p>
            <a
              className="cursor-pointer hover:text-white "
              href="https://github.com/DeepanshuTyagi2004"
              target="_blank"
            >
              <img
                src={github}
                alt="github"
                className="w-6 h-6 object-cover cursor-pointer"
              />
            </a>
            <p className="">/</p>
            <a
              className="cursor-pointer hover:text-white"
              href="https://twitter.com/0xdeepanshu0"
              target="_blank"
            >
              <img
                src={twitter}
                alt="twitter"
                className="w-7 h-7 object-cover cursor-pointer"
              />
            </a>
          </div>
          <div className="gap-2 sm:gap-4 px-2 sm:px-6 py-4 items-center justify-center text-gray-400 font-bold text-[16px] font-heading transition-colors hidden md:flex ">
            <a
              className="cursor-pointer hover:text-white "
              href="https://www.linkedin.com/in/deepanshu-tyagi-2765a9211/"
              target="_blank"
            >
              LinkedIn
            </a>
            <p className="">/</p>
            <a
              className="cursor-pointer hover:text-white "
              href="https://github.com/DeepanshuTyagi2004"
              target="_blank"
            >
              Github
            </a>
            <p className="">/</p>
            <a
              className="cursor-pointer hover:text-white"
              href="https://twitter.com/0xdeepanshu0"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="fixed w-full py-2 flex md:hidden items-center justify-end bottom-0 z-[99]">
        <img
          src={menu ? menuOp : menuCl}
          onClick={() => setMenu(!menu)}
          alt="menu-open"
          className="w-9 h-9 rounded-full object-contain mx-2"
        />
        <div
          className={`absolute w-full ${
            menu ? 'flex' : 'hidden'
          } items-center justify-end bottom-10 z-[99] `}
        >
          <div className="flex flex-col font-heading align-baseline gap-2 text-gray-400 bg-black rounded-2xl pr-24 p-5">
            <a
              href="/"
              className="hover:text-white transition-colors"
              onClick={() => setMenu(!menu)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
              onClick={() => setMenu(!menu)}
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
              onClick={() => setMenu(!menu)}
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-white transition-colors"
              onClick={() => setMenu(!menu)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
              onClick={() => setMenu(!menu)}
            >
              Project
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
              onClick={() => setMenu(!menu)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="fixed w-full px-32 py-10 hidden md:flex items-center justify-end bottom-0 z-[99]">
        <div className="flex flex-col font-heading align-baseline gap-2 text-gray-400">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Project
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
