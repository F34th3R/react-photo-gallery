import React, { SetStateAction } from 'react'
import { Backdrop, BackdropImg } from './Style/Backdrop'
interface ModalProps {
  setSelectedImg: React.Dispatch<SetStateAction<any>>
  selectedImg: any
}

export const Modal: React.FC<ModalProps> = ({
  setSelectedImg,
  selectedImg
}) => {
  const handleClick = (e: any) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <Backdrop
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackdropImg
        src={selectedImg}
        alt="enlarge pic"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </Backdrop>
  )
}
