import React from 'react';
import { SliderData } from './SliderData';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/css';

import './SliderElements.css';

const ImgSlider = () => {
  SwiperCore.use([Autoplay]);
  

  return (
    <>
      <section className="MainContainer">
        <div className="Container">
          <div className="row">
            <div className="heading">
              <h2 className='hedTitle'>Our Vender</h2>
            </div>


            <Swiper className="SliderContainer"
            
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation={true}
                
                >
              {SliderData.map((item, index) => (
                <SwiperSlide className="SliderWrap" key={index}>

                  <div className="LeftContent">
                    <div className='ContentWrap'>


                      <h2 className="title">{item.title}</h2>
                      <p className="PhoneNumber">{item.call}</p>
                      <p className="Email">{item.email}</p>
                      <div className="DescriptionWrap">
                        <div className="Description">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <p>
                        <button
                          type="button"
                          className="SliderButton"
                        >
                          {item.buttonText}
                        </button>
                      </p>
                    </div>
                  </div>


                  <div className="RightContent">
                    <img
                      className="SliderImage" // Add the class here
                      src={item.image}
                      alt="Slider-Image"
                    />
                  </div>


                </SwiperSlide>
              ))}



            </Swiper>

          </div>
        </div>
      </section>
    </>
  );
};

export default ImgSlider;
