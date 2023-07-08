import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';
import ExpandedView from './ExpandedView.jsx'
import Modal from 'react-modal';

const ImageGallery = ({style}) => {
  const[mainImageId, setMainImageId] = React.useState(0);
  const[styleStart, setStyleStart] = React.useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const buttonStyles = {
    height:'50px'
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '80vh',
      width:'80vw'
    },
  };


  const LIST_MAX = 7;
  console.log('style', style);
  const mainImageUrl = style.photos[mainImageId].thumbnail_url;
  const currentPhotoArray = style.photos.slice(styleStart, styleStart + 7);


  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  const updatingMainImage = (id) => {
    setMainImageId(id);

    // if (id >= styleStart + LIST_MAX) {
    //   moveUp();
    // }
  }

  const moveDown = () => {
    setStyleStart(styleStart + 1);
  }
  const moveUp = () => {
    setStyleStart(styleStart -1);
  }
  const selectBefore = () => {
    if(mainImageId <= styleStart) {
      moveUp();
    }
    setMainImageId(mainImageId - 1)

  }

  const selectNext = () => {
    if(mainImageId >= styleStart + LIST_MAX - 1) {
      moveDown();
    }
    setMainImageId(mainImageId + 1);
  }

  const thumbNailGallery = (type) => {
    return currentPhotoArray.map((photo, id) => <ImgStyleIcon
        key ={styleStart + id}
        id={styleStart +id}
        photo ={photo}
        updatingMainImage={updatingMainImage}
        selected = {styleStart + id === mainImageId}
        style={type}
        />)
  }

  const mainImgStyle = {
  }

  return (
    <div  className='img-gallery'>

      <div className='thumbnails-list'>
      <button  onClick={moveUp} disabled={!(styleStart > 0)}>
        &#5169;
        </button>
        <div >
          {style.photos && thumbNailGallery('default')}
        </div>
         <button onClick={moveDown} disabled ={(style.photos.length - LIST_MAX === styleStart)}>&#5167;</button>
      </div>

      <div className='main-img-container'>
        <button style ={buttonStyles}onClick ={selectBefore}disabled ={mainImageId <= 0}>&#5176; </button>
        <img style ={mainImgStyle} src ={style.photos[mainImageId].thumbnail_url} onClick={() => setIsOpen(true)}/>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="ExpandedViewModal">
            <ExpandedView
              imageUrl = {mainImageUrl}
              selectNext ={selectNext}
              selectBefore ={selectBefore}
              enableBefore = {mainImageId > 0}
              enableNext = {mainImageId < style.photos.length -1}
              thumbNailGallery = {thumbNailGallery}
            />
          </Modal>
       <button style ={buttonStyles} onClick ={selectNext} disabled ={mainImageId >= style.photos.length -1}> &#5171; </button>
      </div>
    </div>
  )
}


export default ImageGallery;
