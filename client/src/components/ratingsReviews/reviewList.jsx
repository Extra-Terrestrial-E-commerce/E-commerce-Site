import React from "react";
import ReviewListItem from "./reviewListItem.jsx";
import WriteReview from "./writeReview.jsx";
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

Modal.setAppElement('#root');

const ReviewList = ({currentReviews, currentProduct}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [displayAllReviews, setDisplayAllReviews] = useState(false);
  const [buttonText, setButtonText] = useState('MORE REVIEWS');

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  const displayReviews = (target) => {
    var buttonText = "";
    if (displayAllReviews === true) {
      setDisplayAllReviews(false);
      setButtonText("MORE REVIEWS")
    } if (displayAllReviews === false) {
      setDisplayAllReviews(true);
      setButtonText("LESS")
    }
  }
  console.log("currentProduct", currentProduct)
  console.log("currentReviews", currentReviews);

  return (
    <div>
      <h2>{currentReviews.length} reviews, sorted by nothing yet!</h2>
      <p>Review List</p>
      {displayAllReviews === false && currentReviews.slice(0, 2).map((review) => {
        return(
          <ReviewListItem review={review}
          key={review.review_id} />
        )
      })}
      {displayAllReviews && currentReviews.map((review) => {
        return(
          <ReviewListItem review={review}
          key={review.review_id} />
        )
      })}
      <div class="row">
        <button id="moreReviews"
        onClick={(e)=>{displayReviews(e.target)}}>{buttonText}</button>
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