import React from 'react'
import { useHistory } from 'react-router-dom'
import './StartPage.scss'

export const StartPage = () => {
  
  const history = useHistory()

  const localData = JSON.parse(localStorage.getItem("student"))

  return (
    <div className="start-page">
      <h2>Карточка студента</h2>
      <div className="start-page__content">
        {localData ? (
          <>
          <div className="student-info">
            <div className="card-firstnamename">
              <strong>Имя: </strong> {localData.firstname}
            </div>
            <div className="card-lastname">
              <strong>Фамилия: </strong> {localData.lastname}
            </div>
            <div className="card-birthday">
              <strong>Год рождения: </strong> {localData.birthday}
            </div>
            <div className="card-portfolio">
              <strong>Портфолио: </strong><a href={localData.portfolio}>{localData.portfolio}</a> 
            </div>
          </div>
            
            <button 
              className="btn btn-start"
              onClick={() => history.push('/addstudent')}
            >
              Редактировать
            </button>
          </>
          ) : (
            <div className="start-info">
              <h3>Нет данных </h3> 
              <button 
                className="btn btn-start"
                onClick={() => history.push('/addstudent')}
              >
                Добавить
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}