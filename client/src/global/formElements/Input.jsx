import React from 'react'

const Input = ({
    field,
    form,
    ...props
  }) => (
    <>
      <input {...field} {...props} />
    </>
  )

export default Input