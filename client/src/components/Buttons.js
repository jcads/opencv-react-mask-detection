import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faImages } from '@fortawesome/free-solid-svg-icons'

function Buttons(props) {
  return (
    <div className='buttons fadein flex-item'>
      <div className='button'>
        <label htmlFor='single'>
          <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
        </label>
        <input type='file' id='single' onChange={props.onChange} /> 
      </div>
      
      <div className='button'>
        <label htmlFor='multi'>
          <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
        </label>
        <input type='file' id='multi' onChange={props.onChange} multiple />
      </div>
    </div>
  )
}

export default Buttons;
