
import React from 'react';

const ImgStyleIcon = ({photo, updatingMainImage, id, selected}) => {

  const styles = selected ? {
    width: '70px',
    height:'70px',
    borderRadius: '10%',
    border: 'solid',
    margin:'5px'
  } : {
    width: '70px',
    height:'70px',
    borderRadius: '10%',
    margin:'5px'
  }

  return(
    <div >
      <img style ={styles} src ={photo.thumbnail_url} onClick={()=>updatingMainImage(id) }/>
    </div>
  )
}

export default ImgStyleIcon;