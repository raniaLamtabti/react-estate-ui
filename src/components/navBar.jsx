import React from 'react';
import DropdownMenu from './dropdownMenu';

//Icons
import { FiPlusCircle } from "react-icons/fi";
import { TbUser } from "react-icons/tb";
import { LuFileText, LuEye } from "react-icons/lu";
import { PiChatsCircle } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { BiMessageError } from "react-icons/bi";

//Images
import FlagOfTheUnitedKingdom from "../../public/Flag_of_the_United_Kingdom.png";
import FlagOfFrance from "../../public/Flag_of_France.png";

const userMenuItems = [
  { text: 'Sing in', link: '/', icon: '', image: '', arrow: true },
  { text: 'Sing up', link: '/', icon: '', image: '', arrow: true },
  { text: 'Requests', link: '/', icon: <LuFileText/>, image: '', arrow: true },
  { text: 'Visits', link: '/', icon: <LuEye/>, image: '', arrow: true },
  { text: 'Chat', link: '/', icon: <PiChatsCircle/>, image: '', arrow: true },
  { text: 'Profil', link: '/', icon: <HiOutlineUser/>, image: '', arrow: true },
  { text: 'Wallet', link: '/', icon: <IoWalletOutline/>, image: '', arrow: true },
  { text: 'Dispute', link: '/', icon: <BiMessageError/>, image: '', arrow: true },
  { text: 'Log out', link: '/', icon: <FaPowerOff/>, image: '', arrow: true },
];

const languageMenuItems = [
    { text: '', link: '/', icon: '', image: FlagOfTheUnitedKingdom, arrow: false },
    // { text: '', link: '/', icon: '', image: FlagOfFrance, arrow: false },
  ];

function NavBar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b shadow-lg">
      <div className="flex items-center justify-between py-4 md:px-16 px-10">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-textColor-200" >VisitItForMe</span>
        </a>
        <div className="flex justify-between gap-4 md:gap-10 items-center" >
          <a href="/" className="text-primary font-bold text-center flex items-center text-2xl gap-4">
            <FiPlusCircle className='text-5xl'/>
            <p className='hidden md:block'>Create a request</p>
          </a>
          <DropdownMenu buttonText={<TbUser/>} dropdownItems={userMenuItems} style={'h-14 w-14 rounded-full shadow-xl text-3xl text-primary flex justify-center items-center'} itemsW={'250px'} paddingX={'20px'} image='' arrow={false} />
          <DropdownMenu buttonText={''} dropdownItems={languageMenuItems} style={'h-9 w-20 rounded-full border-2 border-primary text-xl flex justify-center items-center text-primary'} itemsW={'60px'} paddingX={'0px'} image={FlagOfFrance} arrow={true}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
