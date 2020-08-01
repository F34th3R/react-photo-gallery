import React, { useState } from 'react'
import { ImageGrid } from '../../utils/ImageGrid'
import { Modal } from '../../utils/Modal'
import { Header, UploadForm } from '../../utils'

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const [selectedImg, setSelectedImg] = useState<any>(null)

  return (
    <>
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  )
}
