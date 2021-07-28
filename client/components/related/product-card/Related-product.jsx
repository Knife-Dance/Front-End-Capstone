import React, {useState, useContext, useEffect} from 'react';
import {dataUrl, related, review} from '../sample-data';
import css from './card.module.css'
import Modal from '../model/Modal.jsx'
import ReviewAverage from '../../overview/ReviewAverage/ReviewAverage.jsx'
import MainContext from '../../shared/context/MainContext';

const noImgFound = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJFBMVEX4+vvb4OTx9PXl6ezf4+f19/nt8PLz9vfq7fDi5unc4eTs7/GWhAgrAAACGUlEQVR4nO3b23KqMBiAUQEtsn3/961OtydIJEUmaXCtS7n5v5FTEHc7AAAAAAAAAAAAAAAAAAAAAAAAzvr2PX3pgNf6oXnf8Icjjyv0XZxKh8R8rRTYNF+lU8IOqwU2zaF0TNBa++jFsXRM0H7Fwn3pmKAVA5umdEzQhxXuT/3h0B7/bbbwdrpfevopGRIVnq/dZOHT1WzZfUCpiJdu040uZovuVcskzIhNt2g/LVIw5zrcENuwmcLJHdeS3bREwKzrcJO1z+YKJ99h/IZ138bOtCUCZl2HSz8OL/fXkTVXgfnnxaaLnkt/FhDhxPzjJ7hNNzoQY4fhdYUUTMw+fYr7eEn3NPclYCgx+/QpwvPF9tHHNW4gMffwSR4HbK8fxtYWz4v4aWL26VM8F5z68/cXXTuNn1JMEosUzInVJAROEwvMP++dwEli9ulTvBU4Tsw8e5r3AkeJWSdPFaoZ+lNq4HNixrnTBQK73eSC+OpZ7+H+aC7X0L8SDhwlvn6Y3VVW2P3f0KYG1lbY3ba0iYGVFXYPm9q0wLoKu6dtbVJgVYXdaGOb9ItZRYXjwPMyMeUnwXoKp4FpqilcGlhN4eRhW7JaChd/hQpLU5hAYWEfVDgsfrl0qKRwDaVjghTWX7j9dxO3/37pmrtp6ZSIzb/nvdtNnm8v9Gff1f+A/1tcbPw/MwAAAAAAAAAAAAAAAAAAAAAAALl8A7+jEA62Pbx2AAAAAElFTkSuQmCC'

const Relate = ({cards}) => {

    const [data, setData] = useState(dataUrl);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [firstItemIndexToShow, setFirstItemIndexToShow] = useState(0)
    const [salePrice, setSalePrice] = useState(false);

    ///
    // const {related,setSelectedProduct,  } = useContext(MainContext)

    const handlePrevClick = () => {
        setFirstItemIndexToShow(firstItemIndexToShow - 1)
    }
    const handleNextClick = () => {
        setFirstItemIndexToShow(firstItemIndexToShow + 1)
    }

    const dataToShow = data.reduce((acc, newItem) => {
        return [...acc, ...newItem.results.map(item => ({...item, id: newItem.product_id}))]
    }, []);


    const openModal = (item) => {
        setShowModal(true);
        setSelectedProduct(item);
    }

    const hideModal = () => {
        setShowModal(false);
    }



    return (
        <>
        <h2>RELATED PRODUCTS</h2>

        <div className={css.cardContainer}>
            {firstItemIndexToShow !== 0 &&
            <span className={css.btnPrev} onClick={handlePrevClick}>
                <i className="fas fa-chevron-left"></i>
            </span>}


            {firstItemIndexToShow !== dataToShow.length - 4 &&
            <span className={css.btnNext} onClick={handleNextClick}>
            <i className="fas fa-chevron-right slide"></i>
        </span>
            }
            <div className={css.gridContainer}>

                {
                    dataToShow.slice(firstItemIndexToShow, firstItemIndexToShow + 4).map((item, key) => (
                        <div style={{border: '1px solid gray'}} className={css.productItem}>

                            <span onClick={() => openModal(item)}>
                            <i className="far fa-star star"></i>
                            </span>

                            {item.photos[0].thumbnail_url ? <div className={css.productImageContainer}><img src={item.photos[0].thumbnail_url}/></div> :
                            <div className={css.productImageContainer}>
                                <img className={css.noImg} src={noImgFound}/> </div>}
                            <p>{related.find(_ => _.id === +item.id).category}</p>
                            <h5>{item.name}</h5>

                            {item.sale_price ?  <p className={css.lineThrough}>${item.original_price}</p> : <p className={css.nolineThrough}>${item.original_price}</p>}

                            {item.sale_price !== null ? <p className={css.salePrice}>{item.sale_price}</p> : null}
                            <ReviewAverage reviews={review.find(each => each.product === item.id).results}/>
                            <test />

                        </div>
                    ))
                }

            </div>
            <Modal productData={selectedProduct} showModal={showModal} setShowModal={setShowModal}/>
        </div>
        </>
    );

}


export default Relate;


// const test = () => {
//     const [cardReview, setCardReview] = useState(review);
//     return (
//         <>
//         <ReviewAverage review={cardReview}/>
//         </>
//     )
// }

