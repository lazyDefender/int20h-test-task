import React from 'react'

const Input = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <>
      <input {...field} {...props} />
    </>
  )

export default Input