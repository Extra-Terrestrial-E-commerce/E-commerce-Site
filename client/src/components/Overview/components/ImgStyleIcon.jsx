
import React from 'react';

const ImgStyleIcon = ({photo, updatingMainImage, id, selected, style}) => {

  const styles = () => {

    if (style === 'default') {
      return selected ?  {
        width: '70px',
        height:'70px',
        borderRadius: '10%',
        border: '2px solid',
        margin:'5px'
      } : {
        width: '70px',
        height:'70px',
        borderRadius: '10%',
        margin:'5px'
      }
    } else if(style === 'thumbnail') {
      return selected ? {

       width: '20px',
       height:'20px',
       borderRadius: '50%',
       border: '5px solid',
       margin:'5px'
      } : {
        width: '20px',
        height:'20px',
        borderRadius: '50%',
        margin:'5px'
       }
    }
  }

  return(
    <div >
      <img  style ={styles()} src ={photo.thumbnail_url} onClick={()=>updatingMainImage(id) }/>
    </div>
  )
}

export default ImgStyleIcon;