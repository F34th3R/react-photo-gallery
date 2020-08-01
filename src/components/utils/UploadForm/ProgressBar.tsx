import React, { useEffect, Dispatch, SetStateAction } from 'react'
import { useStorage } from '../../../hooks/useStorage'
import { ProgressContainer } from './style/ProgressBarStyled'

interface ProgressBarProps {
  file: File
  setFile: Dispatch<SetStateAction<File | null>>
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ file, setFile }) => {
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) setFile(null)
  }, [url, setFile])

  return (
    <ProgressContainer
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  )
}
