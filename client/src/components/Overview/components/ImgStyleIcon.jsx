
import React from 'react';

const ImgStyleIcon = ({photo, updatingMainImage}) => {
  const styles = {
    width: '100px',
    height:'100px',
    borderRadius: '10%',
    margin:'5px'
  }
  return(
    <img style ={styles} src ={photo.thumbnail_url} onClick={()=>updatingMainImage(photo) }/>
  )
}

export default ImgStyleIcon;