import React from 'react'
import { Container } from 'react-bootstrap'
import first from '../images/first.jpg'
import second from '../images/second.jpg'
import third from '../images/third.jpg'
import fourth from '../images/fourth.jpg'
import five from '../images/five.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';

function Gallery() {
  return (
    <div>

      <Container className='gallery'>
        <Swiper className='gallery' modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={10} pagination={{clickable: true}} scrollbar={{draggable: true}} slidesPerView={5} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>

          <SwiperSlide><img className='first' src={first} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='second' src={second} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='third' src={third} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='fourth' src={fourth} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='fifth' src={five} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>

          
          <SwiperSlide><img className='first' src={first} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='second' src={second} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='third' src={third} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='fourth' src={fourth} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
          <SwiperSlide><img className='fifth' src={five} style={{'height' : '300px', 'width' : '220px'}}/></SwiperSlide>
        </Swiper>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>


            
      </Container>
    </div>
  )
}

export default Gallery
