import { useTranslation } from 'react-i18next'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import pamirImg from './Img/pamir.jpg'
import iskanderkulImg from './Img/iskanderkul.jpg'
import parisImg from './Img/paris.jpg'
import kyotoImg from './Img/kyoto.jpg'
import icelandImg from './Img/iceland.jpg'
import santoriniImg from './Img/santorini.jpg'

const DESTINATIONS = [
  { id: 'pamir', image: pamirImg, days: 10, price: '$1290' },
  { id: 'iskanderkul', image: iskanderkulImg, days: 5, price: '$590' },
  { id: 'paris', image: parisImg, days: 7, price: '$1450' },
  { id: 'kyoto', image: kyotoImg, days: 9, price: '$1890' },
  { id: 'iceland', image: icelandImg, days: 8, price: '$2100' },
  { id: 'santorini', image: santoriniImg, days: 6, price: '$1150' },
]

export default function Slider() {
  const { t } = useTranslation()

  return (
    <section id="destinations" className="section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">{t('slider.title')}</h2>
          <p className="section__subtitle">{t('slider.subtitle')}</p>
        </div>

        <Swiper
          className="destinations-slider"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          a11y={{ prevSlideMessage: t('slider.prev'), nextSlideMessage: t('slider.next') }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {DESTINATIONS.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="card">
                <div className="card__media">
                  <img src={item.image} alt={t(`slider.items.${item.id}.title`)} loading="lazy" />
                  <span className="card__badge">{t('slider.days', { count: item.days })}</span>
                </div>
                <div className="card__body">
                  <span className="card__location">{t(`slider.items.${item.id}.location`)}</span>
                  <h3 className="card__title">{t(`slider.items.${item.id}.title`)}</h3>
                  <p className="card__text">{t(`slider.items.${item.id}.description`)}</p>
                  <div className="card__footer">
                    <span className="card__price">{t('slider.from', { price: item.price })}</span>
                    <button type="button" className="btn btn--small">{t('slider.book')}</button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
