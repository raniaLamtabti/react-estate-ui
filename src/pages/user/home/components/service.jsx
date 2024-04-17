import React from 'react';

const Service= ({ image, title, description, row}) => {
  return (
    <div className={`flex ${row ? 'flex-col lg:flex-row ' : 'flex-col '} items-center gap-8`}>
        <img src={image} className={`${row ? 'flex1' : 'flex-1'} h-40 w-60`}/>
        <div className={`${row ? 'px-20 flex-2 flex flex-col items-center lg:items-start' : 'flex1  text-center'} max-w-[600px] lg:max-w-full`}>
            <h1 className='font-bold text-xl mb-2'>{title}</h1>
            <p className={`${row ? 'text-center lg:text-left' : ''} text-xl`}>{description}</p>
        </div>
    </div>
  );
}

export default Service;
