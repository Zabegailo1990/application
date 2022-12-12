import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './scss/slider.module.scss'

function Slider({ children }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            pagination={{ type: 'progressbar' }}
            navigation={true}
            className={styles.slider}
        >
            {children?.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
