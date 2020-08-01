import { useState, useEffect } from 'react'
import { projectStorage, timestamp, projectFirestore } from '../firebase/config'

export const useStorage = (file: File) => {
  const [progress, setProgress] = useState<number>(0)
  const [error, setError] = useState<Error | string | null>(null)
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name)
    const colletionRef = projectFirestore.collection('images')

    storageRef.put(file).on(
      'state_changed',
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      err => {
        setError(err)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        await colletionRef.add({ url, createdAt })
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}
