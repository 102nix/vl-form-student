import React from 'react'

export const TextField = ({ label, type, name, value, onChange, error }) => {

  return (
    <div className="form-group">
      <label 
        htmlFor={name}
        className='label-form'
      >
        {label}
      </label>
      <input 
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="input-form"
      />
      {error&& <div className="error-field">{error}</div>}
    </div>
  )
}
