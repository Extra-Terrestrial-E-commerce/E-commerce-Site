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


const ReviewList = ({currentReviews, currentProduct}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [displayAllReviews, setDisplayAllReviews] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <h2>{currentReviews.length} reviews, sorted by nothing yet!</h2>
      <p>Review List</p>
      {currentReviews && currentReviews.map((review) => {
        return(
          <ReviewListItem review={review}
          key={review.review_id} />
        )
      })}
      <div class="row">
        <button>MORE REVIEWS</button>
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