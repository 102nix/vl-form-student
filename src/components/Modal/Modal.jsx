import React from 'react'
import { NavLink } from 'react-router-dom'
import './Modal.scss'

export const Modal = () => {

  return (
    <div className="modal-window">
      <div className="modal_container">
        <div className="text-modal">Обновлено!</div>
        <div className="line"></div>
        <div className="link-container">
          <NavLink to='/'>Close</NavLink>
        </div>
      </div>
    </div>
  )
}
