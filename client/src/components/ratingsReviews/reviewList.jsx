import React from "react";
import ReviewListItem from "./reviewListItem.jsx";
import WriteReview from "./writeReview.jsx";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import Modal from "react-modal";
const { useState, useEffect } = React;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const scrollStyles = {
    'overflow-x': 'hidden',
    'overflow-y': 'scroll',
    'height': '400px'
};

Modal.setAppElement('#root');

const ReviewList = ({currentReviews, currentProduct}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [buttonText, setButtonText] = useState('MORE REVIEWS');
  const [reviewCount, setReveiwCount] = useState(2);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  const displayReviews = (target) => {
    var buttonText = "";
    if (currentReviews.length > reviewCount-1) {
      setReveiwCount(reviewCount + 2)
      setButtonText("MORE REVIEWS")
    }
  }

  return (
    <div>
      <h2>{currentReviews.length} reviews, sorted by nothing yet!</h2>
      <p>Review List</p>
      <div style={scrollStyles}>

      {currentReviews.slice(0, reviewCount).map((review) => {
        return(
          <ReviewListItem review={review}
          key={review.review_id} />
        )
      })}
      </div>
      <div class="row">
        {currentReviews.length > reviewCount-1 && <button id="moreReviews"
        onClick={displayReviews}>{buttonText}</button>}
        <button onClick={openModal}>ADD A REVIEW</button>
      </div>
      <br/>
      <Modal
        currentProduct = {currentProduct}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
      <WriteReview />
      </Modal>

    </div>
  )
  }

  export default ReviewList;