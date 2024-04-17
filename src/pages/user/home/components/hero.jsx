import React from 'react';
import heroBg from '/heroBg.svg'
import heroPerson from '/heroPerson.svg'
import CustomDatePicker from '../../../../components/datePicker'

function Hero() {
  return (
    <div className={`bg-gray-50 bg-cover bg-center h-[60vh] lg:h-[80vh] flex justify-between w-[100wh]`} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className='pt-[9%] pl-[50px] lg:pl-[8%] pb-[7%] pr-[20px] lg:pr-0 flex flex-col flex-1 justify-between'>
            <div className='flex flex-col gap-10 max-w-[700px]'>
                <h1 className='font-bold text-4xl lg:text-5xl' style={{ lineHeight: '60px' }}>Occideretur iam pretioso palatii impetraret.</h1>
                <p className='leading-relaxed text-xl lg:text-2xl mb-16' style={{ lineHeight: '40px' }}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500.</p>
            </div>
            <div className='flex h-20 shadow-lg bg-white rounded-full w-full pl-10'>
                <input type="text" placeholder='Enter your city' className='flex-1 m-4 border-r-2 border-r-black'/>
                <div className='flex-1 flex items-center'>
                <CustomDatePicker className=''/>
                </div>
                <button className='bg-primary text-white flex-1 text-lg rounded-r-full px-10'>Search</button>
            </div>
        </div>
        <img src={heroPerson} className='hidden xl:block '/>
    </div>
  );
}

export default Hero;
