import Section from '@shared/Section'
import styles from './Video.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Video() {
  return (
    <Section className={cx('container')}>
      <video autoPlay muted loop poster="/assets/poster.jpg">
        <source src="./assets/main.mp4" type="video/mp4"></source>
      </video>
    </Section>
  )
}
