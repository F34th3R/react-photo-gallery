import React, { useState } from 'react'
import { ProgressBar } from './ProgressBar'
import { Error } from './style/ErrorStyled'
import { Output } from './style/OutputStyled'
import { Form } from './style/Form'

interface UploadFormProps {}

export const UploadForm: React.FC<UploadFormProps> = () => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const types = ['image/png', 'image/jpeg']

  const handleChange = (event: any) => {
    let selected = event.target.files[0]

    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpg)')
    }
  }

  return (
    <Form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <Output>
        {error && <Error>{error}</Error>}
        {file && <div>{file?.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </Output>
    </Form>
  )
}
