import "../styles/ButtonSaya.css"
import React from 'react'

const ButtonSaya = (props) => {
  return (
    <a href={props.link} class="btn btn-saya btn-danger">{props.text}</a>
  )
}

export default ButtonSaya