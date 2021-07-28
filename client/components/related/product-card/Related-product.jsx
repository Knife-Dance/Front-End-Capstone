import React, {useState, useContext, useEffect} from 'react';
import {dataUrl, relatedProduct, review} from '../sample-data';
import css from './card.module.css'
import Modal from '../model/Modal.jsx'
import ReviewAverage from '../../overview/ReviewAverage/ReviewAverage.jsx'
import MainContext from '../../shared/context/MainContext';

import { noImgFound } from './staticImg';



const Relate = ({cards}) => {

    // const [data, setData] = useState(dataUrl);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectProduct] = useState();
    const [firstItemIndexToShow, setFirstItemIndexToShow] = useState(0)
    // const [salePrice, setSalePrice] = useState(false);

    ///
    const {related,setSelectedProduct } = useContext(MainContext)

console.log(related)

    const handlePrevClick = () => {
        setFirstItemIndexToShow(firstItemIndexToShow - 1)
    }
    const handleNextClick = () => {
        setFirstItemIndexToShow(firstItemIndexToShow + 1)
    }

    const dataToShow = related.reduce((acc, newItem) => {
        return [...acc, ...newItem.style.results.map(item => ({...item, id: newItem.product.id}))]
    }, []);
    console.log(dataToShow)


    const openModal = (item) => {
        setShowModal(true);
        setSelectProduct(item);
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
                        <div onClick={() => setSelectedProduct(item.id)}style={{border: '1px solid gray'}} className={css.productItem}>

                            <span onClick={() => openModal(item)}>
                            <i className="far fa-star star"></i>
                            </span>

                            {item.photos[0].thumbnail_url ? <div className={css.productImageContainer}><img src={item.photos[0].thumbnail_url}/></div> :
                            <div className={css.productImageContainer}>
                                <img className={css.noImg} src={noImgFound}/> </div>}
                            <p>{related.find(_ => _.product.id === +item.id).product.category}</p>
                            <h5>{item.name}</h5>

                            {item.sale_price ?  <p className={css.lineThrough}>${item.original_price}</p> : <p className={css.nolineThrough}>${item.original_price}</p>}

                            {item.sale_price !== null ? <p className={css.salePrice}>{item.sale_price}</p> : null}
                            {/* <ReviewAverage reviews={related.find(each => each.product.id === item.id).rate}/> */}
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

