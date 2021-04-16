import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function Images(props) {
  console.log(props)
  const imagesComponents = props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <div 
        onClick={() => props.removeImage(image.public_id)} 
        className='delete'
      >
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
      <img id="target" src={image} alt=''/>
      {/*<img src={image.secure_url} alt='' />*/}
    </div>
  )

  return imagesComponents;
}

export default Images;
