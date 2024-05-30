import React from 'react'
import './styles.css'
function Buttons({text, onclick, outlined}) {
  return (
    <div className={outlined ? 'outlined-btn': 'btn'} onClick={onclick}>
        {text}
    </div>
  )
}

export default Buttons