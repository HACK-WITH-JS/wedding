import { parseISO, format, getDay } from 'date-fns'
import Section from '@shared/Section'
import styles from './Heading.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface HeadingProps {
  date: string
}

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default function Heading({ date }: HeadingProps) {
  const weedingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weedingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weedingDate)]}</div>
    </Section>
  )
}
