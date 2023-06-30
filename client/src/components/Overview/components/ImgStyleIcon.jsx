
import React from 'react';

const ImgStyleIcon = ({photo, updatingMainImage, id, selected, style}) => {

  const styles = () => {
    let resultStyle;
    if (style === 'thumbnail') {
      resultStyle = selected ? {
        border: '5px solid',
        width: '20px',
        height:'20px',
        borderRadius: '50%',
        margin:'5px'

     } : {
      width: '20px',
      height:'20px',
      borderRadius: '50%',
      margin:'5px'

   }

    } else {
      resultStyle = selected ? {
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
    }
    return resultStyle;
  }

  return(
    <div >
      <img  style ={styles()} src ={photo.thumbnail_url} onClick={()=>updatingMainImage(id) }/>
    </div>
  )
}

export default ImgStyleIcon;