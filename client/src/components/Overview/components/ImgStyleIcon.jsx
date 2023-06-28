
import React from 'react';

const ImgStyleIcon = ({photo, updatingMainImage, id, selected}) => {

  const styles = selected ? {
    width: '100px',
    height:'100px',
    borderRadius: '10%',
    border: 'solid',
    margin:'5px'
  } : {
    width: '100px',
    height:'100px',
    borderRadius: '10%',
    margin:'5px'
  }

  return(
    <img style ={styles} src ={photo.thumbnail_url} onClick={()=>updatingMainImage(id) }/>
  )
}

export default ImgStyleIcon;