import './scss/global.scss'

import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { useEffect, useState } from 'react'

import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'

import { Wedding } from '@models/weddings'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import AttendCountModal from './components/AttendCountModal'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  //1. 웨딩 데이터 콜
  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }

        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (wedding === null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />

      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
