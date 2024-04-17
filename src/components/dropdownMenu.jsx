import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const DropdownMenu = ({ buttonText, dropdownItems, image, arrow, style, itemsW, paddingX }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className={style}>
        {buttonText}
        {image && <img src={image} className="mr-2 h-4 w-6"/>}
        {arrow && <IoIosArrowDown />}
      </button>
      {isOpen && (
        <div className="absolute z-60 top-full right-0 mt-3 bg-white rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] px-4" style={{ width: itemsW }}>
          <div className="divide-y" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {dropdownItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center justify-between text-lg font-medium text-textColor-200"
                role="menuitem"
                style={{ padding: `10px ${paddingX}` }}
              >
                <div className='flex items-center gap-5'>
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.image && <img src={item.image} className="mr-2 h-4 w-6"/>}
                    {item.text}
                </div>
                {item.arrow && <IoIosArrowForward />}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
