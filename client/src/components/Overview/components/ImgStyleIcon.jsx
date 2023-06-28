
import React from 'react';

const ImgStyleIcon = ({photo}) => {
  const styles = {
    width: '100px',
    height:'100px',
    margin:'5px'
  }
  return(
    <img style ={styles} src ={photo.thumbnail_url}/>
  )
}

export default ImgStyleIcon;