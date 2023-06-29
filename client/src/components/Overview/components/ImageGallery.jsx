import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';
import ExpandedView from './ExpandedView.jsx'
import Modal from 'react-modal';

const ImageGallery = ({style}) => {
  const[mainImageId, setMainImageId] = React.useState(0);
  const[styleStart, setStyleStart] = React.useState(0);
  const[view, setView] = React.useState('default')
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
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
  const thumbNailStyles = {
    display:'flex',
    flexDirection: 'column'
  }
  const updatingMainImage = (id) => {
    setMainImageId(id);
    if (id < styleStart) {
      moveUp();
    }
    if (id >= styleStart + LIST_MAX) {
      moveDown();
    }
  }
  const moveDown = () => {
    if (styleStart < style.photos.length -1 ) {
      setStyleStart(styleStart + 1);
    }
  }
  const moveUp = () => {
    setStyleStart(styleStart -1);
  }
  const selectBefore = () => {
    setMainImageId(mainImageId - 1)
  }

  const selectNext = () => {
    setMainImageId(mainImageId + 1);
  }
  return (
    <div  className='row'>

      <div style ={thumbNailStyles} className=''>
        {styleStart > 0 && <button onClick={moveUp}>up</button> }

        {style.photos && style.photos.slice(styleStart, styleStart + 7).map((photo, id) => <ImgStyleIcon
        key ={id}
        id={id}
        photo ={photo}
        updatingMainImage={updatingMainImage}
        selected = {id === mainImageId}
        />
        )}
        <button onClick={moveDown}>down</button>
      </div>
      <div className=''>
        {mainImageId > 0 && <button onClick ={selectBefore}>left </button>}
        <img id ='img' src ={style.photos[mainImageId].thumbnail_url} onClick={() => setIsOpen(true)}/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="ExpandedViewModal">
            <ExpandedView/>
          </Modal>
        {mainImageId < style.photos.length -1 && <button onClick ={selectNext}> right </button>}
      </div>
    </div>
  )
}


export default ImageGallery;
