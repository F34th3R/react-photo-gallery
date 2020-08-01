import React, { SetStateAction } from 'react'
import { useFirebase } from '../../../hooks/useFirestore'
import { ImgGridContainer, ImgWrapper, Img } from './Style/ImageGrindContainer'

interface ImageGridProps {
  setSelectedImg: React.Dispatch<SetStateAction<any>>
}

export const ImageGrid: React.FC<ImageGridProps> = ({ setSelectedImg }) => {
  const { docs } = useFirebase('images')
  return (
    <ImgGridContainer>
      {docs &&
        docs.map(doc => (
          <ImgWrapper
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <Img
              src={doc.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              alt="uplaoded pick"
            />
          </ImgWrapper>
        ))}
    </ImgGridContainer>
  )
}
