import React from "react";
import RatingsBreakdown from "./ratingsBreakdown.jsx";
import ReviewList from "./reviewList.jsx"
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

const RatingsAndReview = ({currentProduct}) => {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  const [sortParam, setSortParam] = useState("relevant");
  const [filterNumbers, setFilterNumbers] = useState({5: 0, 4: 0, 3: 0, 2: 0, 1: 0});
  const [filteredList, setFilteredList] = useState(currentReviews);
  const [filtersAdded, setFiltersAdded] = useState(false);

  var reviewparams = {
    params : {
      product_id: currentProduct.id,
      sort: sortParam
    }
  }

  useEffect(() => {
    apiClient.get('/reviews/', reviewparams )
      .then((data) => {
        setCurrentReviews(data.data['results']);
        setFilteredList(data.data['results']);
      })
      .catch((error) => {
        console.error(error);
      });
      apiClient.get('/reviews/meta', reviewparams )
      .then((data) => {
        setReviewMeta(data.data);

      })
      .catch((error) => {
        console.error(error);
      })
  }, [currentProduct, sortParam])

  const filterHandler = (number) => {
    var copyofFilterNumbers = filterNumbers;
    if (filterNumbers[number] === 0) {
      copyofFilterNumbers[number] = 1;
      setFilterNumbers(copyofFilterNumbers);
      setFiltersAdded(true);
      filterReviews(filterNumbers);
      return;

    } if (filterNumbers[number] === 1) {
      copyofFilterNumbers[number] = 0;
      setFilterNumbers(copyofFilterNumbers);
      for (var keys in filterNumbers) {
        if (filterNumbers[keys] === 1) {
          filterReivews(filterNumbers);
          return;
        } else {
          setFiltersAdded(false);
          setFilteredList(currentReviews);
        }
      }
    }
  }


  const filterReviews = (args) => {
    var matching = [];
    for (var i = 0; i < currentReviews.length; i++) {
      var key = currentReviews[i].rating;
      if(filterNumbers[key] === 1) {
        matching.push(currentReviews[i]);
      }
    }
    setFilteredList(matching);
  }

  const removeFiltersHandler = () => {
    setFilteredList(currentReviews);
    setFilterNumbers({5: 0, 4: 0, 3: 0, 2: 0, 1: 0});
  }

  console.log("reviews", currentReviews);

  return (
    <>
    <div class="row">
      <div class="oneThird">
        <h3>RATINGS & REVIEWS</h3>
        {filtersAdded && <><p>filters have been added </p><button onClick={()=>{removeFiltersHandler()}}>Remove Filters</button></>}
        {reviewMeta.ratings &&
        <RatingsBreakdown
        reviewMeta={reviewMeta}
        filterHandler={filterHandler}/>}

      </div>
      <div class="twoThirds">
        {filterReviews.length &&
        <ReviewList
        currentProduct={currentProduct}
        currentReviews={filteredList}
        setSortParam={setSortParam}
        />}
      </div>
    </div>

    </>
  )
}


export default RatingsAndReview;