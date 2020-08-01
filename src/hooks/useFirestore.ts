import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useFirebase = (collection: any) => {
  const [docs, setDocs] = useState<Array<any> | null>([])

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents: any[] = []
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })

    return () => unsub()
  }, [collection])

  return { docs }
}
