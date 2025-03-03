import React, {
  ComponentProps,
  createContext,
  useContext,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import Modal from '@/components/shared/Modal'

type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, 'open'>

interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
}

export function ModalContext({ children }: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues)
  const $portal_root = document.getElementById('root-portal')
  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true })
  }

  const close = () => {
    setModalState(defaultValues)
  }

  const values = { open, close }

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root !== null
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </Context.Provider>
  )
}

export function useModalContext() {
  const values = useContext(Context)

  if (values === undefined) {
    throw new Error('Modal Context 안에서 사용 해주세요')
  }

  return values
}
