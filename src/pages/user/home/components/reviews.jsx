import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import ClientReview from './clientReview';
import user1 from '/user1.png'
import user2 from '/user2.png'
import user3 from '/user3.png'

export default function Reviews() {
    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
        1536: {
            slidesPerView: 4,
        },
    };
  return (
    <div>
        <div className='flex justify-end gap-4 mb-10'>
            <div className="custom-swiper-button-prev swiper-button-prev"></div>
            <div className="custom-swiper-button-next swiper-button-next"></div>
        </div>
      <Swiper
        breakpoints={breakpoints} 
        spaceBetween={10}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper px-16"
      >
        <SwiperSlide>
          <ClientReview image={user1} 
          name={'Alexis ozoria'} 
          date={'Updated Nov 24, 2022'} 
          title={'"Secure and Transparent Transactions"'} 
          review={'Le Lorem Ipsum est simplement du faux texte employé dans la compostion et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500,'}/>
      </SwiperSlide>
      <SwiperSlide>
          <ClientReview image={user2} 
          name={'Gabriel Martinez Montoya'} 
          date={'Dec 21, 2023'} 
          title={'"Empowering Financial Independence"'} 
          review={'Le Lorem Ipsum est simplement du faux texte employé dans la compostion et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500,'}/>
      </SwiperSlide>
      <SwiperSlide>
          <ClientReview image={user3} 
          name={'Donovan'} 
          date={'August 05, 2023'} 
          title={'"Revolutionary DeFi Platform!"'} 
          review={'Le Lorem Ipsum est simplement du faux texte employé dans la compostion et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500,'}/>
      </SwiperSlide>
      <SwiperSlide>
          <ClientReview image={user1} 
          name={'Alexis ozoria'} 
          date={'Updated Nov 24, 2022'} 
          title={'"Secure and Transparent Transactions"'} 
          review={'Le Lorem Ipsum est simplement du faux texte employé dans la compostion et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500,'}/>
      </SwiperSlide>
      <SwiperSlide>
          <ClientReview image={user2} 
          name={'Gabriel Martinez Montoya'} 
          date={'Dec 21, 2023'} 
          title={'"Empowering Financial Independence"'} 
          review={'Le Lorem Ipsum est simplement du faux texte employé dans la compostion et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500,'}/>
      </SwiperSlide>
      <SwiperSlide>
          <ClientReview image={user3} 
          name={'Donovan'} 
          date={'August 05, 2023'} 
          title={'"Revolutionary DeFi Platform!"'} 
          review={'Le Lorem Ipsum est simplement du faux texte employé dans la compostion et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500,'}/>
      </SwiperSlide>
      </Swiper>
    </div>
  );
}
