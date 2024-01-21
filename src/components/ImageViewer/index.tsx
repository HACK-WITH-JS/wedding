import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './ImageViewer.module.scss'
import classNames from 'classnames/bind'
import 'swiper/css'
import './swiper.css'
import Dimmed from '../shared/Dimmed'

const cx = classNames.bind(styles)

interface ImageViewerProps {
  images: string[]
  open?: boolean
  selectedIdx: number
  onClose: () => void
}

export default function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: ImageViewerProps) {
  if (open === false) {
    return null
  }

  return (
    <Dimmed>
      <CloseButton onClose={onClose} className={cx('icon-close')} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt="웨딩 이미지" />
            </SwiperSlide>
          )
        })}
        <SwiperSlide />
      </Swiper>
    </Dimmed>
  )
}

interface CloseButtonProps {
  onClose: () => void
  className: string
}

function CloseButton({ onClose, className }: CloseButtonProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <polygon
        fill-rule="evenodd"
        points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"
      />
    </svg>
  )
}
