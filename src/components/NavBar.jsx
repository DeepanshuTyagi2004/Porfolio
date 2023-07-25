import {logo} from '../assets';

function NavBar({}) {
  return (
    <div className="flex items-center bg-[#272822] px-6 py-4 w-full">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-11 h-9 rounded-full object-contain"
          />
          <p className="ml-3 text-white font-bold text-18px]">Deepanshu</p>
        </div>
      </div>
    </div>
  )
}
export default NavBar
