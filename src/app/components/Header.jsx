import Image from "next/image";
import logo from '../../../public/logo.svg';

export const Header = () => {
  return (
    <header className="max-w-full pt-11 sm:pt-9 pb-6 sm:pb-4 sm:px-4 md:mb-6 border-b sm:border-none text-xs">
      <div className="w-[109px] mx-auto mb-9"><a href='#'><Image src={logo} alt='logo image' /></a></div>
      <nav className="md:mx-24 overflow-x-auto">
        <ul className="flex justify-between items-center justify-items-center">
          <div className="flex gap-x-3.5">
            <li><a href="#">ALL</a></li>
            <li><a href="#">NEW</a></li>
            <li><a href="#">VINTAGE</a></li>
            <li><a href="#">CATEGORY</a></li>
            <li><a href="#">LOOKBOOK</a></li>
            <li><a href="#">BLOG</a></li>
          </div>
          <div className="flex gap-x-3.5">
            <li><a href="#">LOGIN</a></li>
            <li><a href="#">CONTACT</a></li>
          </div>
        </ul>
      </nav>
    </header>
  )
}