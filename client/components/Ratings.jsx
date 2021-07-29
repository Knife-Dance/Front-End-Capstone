import React, { useState, useEffect } from 'react';
import FilterRatings from './ratings/FilterRatings/FilterRatings.jsx';
import ReviewList from './ratings/ReviewList/ReviewList.jsx';
import CreateReview from './ratings/CreateReview.jsx';
import SortReviews from './ratings/SortReviews/SortReviews.jsx';
import ModalPhoto from './ratings/ModalPhoto/ModalPhoto.jsx';

function Ratings(props) {
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [stars, setStars] = useState([]);
  const [count, setCount] = useState(props.reviews.length);
  const [clickedPhoto, setClickedPhoto] = useState('');
  const [modal, setModal] = useState(false);

  //FILTER METHODS
  const addFilter = (star) => {
    let selected = props.reviews.filter((review) => review.rating === star);
    let joinSelected = selected.concat(filtered);
    let addStar = stars.concat([star]);
    setFiltered(joinSelected);
    setStars(addStar);
  };
  const removeFilter = (star) => {
    let unselected = filtered.filter((review) => review.rating !== star);
    let index = stars.indexOf(star)
    let newStars = stars;
    newStars.splice(index, 1);
    setFiltered(unselected);
    setStars(newStars);
  };
  const handleReviewFilter = (star) => {
    if (stars.indexOf(star) === -1) {
      addFilter(star);
    } else {
      removeFilter(star);
    }
  };
  const clearFilter = () => {
    setFiltered([]);
  };

  //REVIEW LIST METHODS
  const moreReviews = () => {
    let more = props.reviews.slice(0, reviews.length + 2);
    setReviews(more);
  };
  const lessReviews = () => {
    let less = reviews.slice(0, reviews.length - 2);
    setReviews(less);
  };

  //MODAL METHODS
  const handlePhotoClick = (url) => {
    setClickedPhoto(url);
    setModal(true);
  };

  //PAGE RENDERS
  useEffect(() => {
    setReviews(props.reviews.slice(0, 2));
  }, []);

  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <SortReviews numberOfReviews={props.reviews.length}/>
      <FilterRatings
        meta={props.meta}
        handleClick={handleReviewFilter}
        clearFilter={clearFilter}
      />
      <ModalPhoto photo={clickedPhoto} showModal={modal} hideModal={setModal}/>
      <ReviewList
        reviews={filtered.length === 0 ? reviews : filtered}
        meta={props.meta}
        moreReviews={moreReviews}
        lessReviews={lessReviews}
        filtered={filtered}
        count={count}
        photoClick={handlePhotoClick}
      />
      <CreateReview />
    </div>
  );
}

export default Ratings;