import Section from "../layout/Section";

import img1 from '../../assets/images/gallery/ws01.jpg';
import img2 from '../../assets/images/gallery/ws02.jpg';
import img3 from '../../assets/images/gallery/ws03.jpg';
import img4 from '../../assets/images/gallery/ws04.jpg';
import img5 from '../../assets/images/gallery/ws05.jpg';
import img6 from '../../assets/images/gallery/ws06.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <Section title="갤러리">
      <Swiper
        slidesPerView="auto"
        centeredSlides
        spaceBetween={16}
        className="gallery-swiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="gallery-slide">
            <img src={src} alt={`gallery-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
