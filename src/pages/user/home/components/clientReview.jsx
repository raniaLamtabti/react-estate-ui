import React from 'react';

const ClientReview= ({ image, name, date, title, review}) => {
  return (
    <div className='max-w-[400px] h-[90%] shadow-lg p-10 rounded-2xl flex flex-col gap-8 m-5'>
        <div className='flex gap-4 items-center'>
            <img src={image} width={'20px'}/>
            <div className='flex flex-col items-start'>
                <h1 className='text-lg font-black'>{name}</h1>
                <p className='text-sm'>{date}</p>
            </div>
        </div>
        <div className='flex flex-col gap-6 items-start'>
            <h1 className='text-2xl font-bold text-start'>{title}</h1>
            <p className='text-start'>{review}</p>
        </div>
    </div>
  );
}

export default ClientReview;
