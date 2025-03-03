import { useModalContext } from '@/contexts/ModalContext'
import { Wedding } from '@/models/weddings'
import { useEffect, useRef } from 'react'

export default function AttendCountModal({ wedding }: { wedding: Wedding }) {
  const { open, close } = useModalContext()

  const $input = useRef<HTMLInputElement>(null)
  const haveSeenModal = localStorage.getItem('@have-seen-modal')

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return
    }

    open({
      title: `현재 참석자: ${wedding.attendCount}명`,
      body: (
        <div>
          <input
            ref={$input}
            type="number"
            placeholder="참가 가능 인원을 추가해주세요"
            style={{
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box',
              border: '1px solid black',
            }}
          />
        </div>
      ),
      onLeftButtonClick: () => {
        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
      onRightButtonClick: async () => {
        if ($input.current === null) {
          return
        }

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + $input.current.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
