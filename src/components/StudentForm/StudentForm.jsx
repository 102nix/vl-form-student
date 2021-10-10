import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField } from '../InputField/TextField'
import { validator } from '../../utils/validator'
import { Modal } from '../Modal/Modal'
import './StudentForm.scss'

export const StudentForm = () => {

  const history = useHistory()
  
  const localData = JSON.parse(localStorage.getItem("student")) || {}
  const [isShowModal, setIsShowMpdal] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
    portfolio: ''
  })

  const [errorConfig, setErrorConfig] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
    portfolio: ''
  })

  useEffect(() => {
    if (Object.values(localData).length > 0) {
      setData(localData)
    }
  }, [])

  useEffect(() => {
    handleValidate()
  }, [data])

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState, 
      [target.name]: target.value
    }))
  }

  const handleValidate = () => {
    const errorValidate = validator(data)
    setErrorConfig({...errorValidate})
    Object.values(errorValidate).length === 0 ? setIsValid(true) : setIsValid(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("student", JSON.stringify(data))
    setIsShowMpdal(!isShowModal)
  }

  return (
    <>
      {isShowModal &&
        <Modal />
      }
      <div className="form-container">
        <h3>Создать</h3>
        <form onSubmit={handleSubmit}>
          <TextField 
            label='Имя'
            type='text'
            name='firstname'
            value={data.firstname}
            onChange={handleChange}
            error={errorConfig.firstname}
          />
          <TextField 
            label='Фамилия'
            type='text'
            name='lastname'
            value={data.lastname}
            onChange={handleChange}
            error={errorConfig.lastname}
          />
          <TextField 
            label='Год рождения'
            type='number'
            name='birthday'
            value={data.birthday}
            onChange={handleChange}
            error={errorConfig.birthday}
          />
          <TextField 
            label='Портфолио'
            type='text'
            name='portfolio'
            value={data.portfolio}
            onChange={handleChange}
            error={errorConfig.portfolio}
          />
          {Object.values(localData).length > 0 ? (
            <>
              <button 
                className="btn"
                onClick={() => history.push('/')}
              >
                Назад
              </button>
              <button 
                type='submit'
                disabled={!isValid}
                className={!isValid ? "btn" : "btn btn-start"} 
              >
                Обновить
              </button>
            </>
            ) : (
              <button 
                type='submit'
                disabled={!isValid}
                className={!isValid ? "btn" : "btn btn-start"} 
              >
                Создать
              </button>
            )
          }
        </form>
      </div>
    </>
  )
}