import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

export default function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했어요 잠시후 다시 시도해주세요
        </>
      )}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m8.5 1032.4c-3.0376 0-5.5 2.5-5.5 5.5 0 1.6 0.6167 2.9 1.5938 3.9 0.1337 0.2 0.2591 0.3 0.4062 0.5l7 7.1 7-7.1 0.344-0.4c1.013-1 1.656-2.4 1.656-4 0-3-2.462-5.5-5.5-5.5-1.329 0-2.549 0.4-3.5 1.2-0.951-0.8-2.1711-1.2-3.5-1.2z"
          fill="#c0392b"
        />
        <path
          d="m8.8889 1033.4c-2.7001 0-4.8889 2.2-4.8889 4.9 0 1.3 0.5481 2.5 1.4167 3.4 0.1188 0.2 0.2303 0.3 0.3611 0.4l6.2222 6.3 6.222-6.3 0.306-0.3c0.901-0.9 1.472-2.1 1.472-3.5 0-2.7-2.189-4.9-4.889-4.9-1.181 0-2.266 0.4-3.111 1.1-0.845-0.7-1.93-1.1-3.1111-1.1z"
          fill="#e74c3c"
        />
      </g>
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
    </svg>
  )
}
