import React, {useState, useContext, useEffect, useMemo} from 'react';
import {dataUrl, relatedProduct, review} from '../sample-data';
import css from './card.module.css'
import Modal from '../model/Modal.jsx'
import ReviewAverage from '../../overview/ReviewAverage/ReviewAverage.jsx'
import MainContext from '../../shared/context/MainContext';

import { noImgFound } from './staticImg';




const Relate = ({cards}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRelatedProduct, setSelectedRelatedProduct] = useState();
    const [firstItemIndexToShow, setFirstItemIndexToShow] = useState(0)

    const { related,setSelectedProduct, products, selectedProduct, productFeature } = useContext(MainContext)


    // return useMemo(() => {
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
            const findProduct = related.find(each => each.product.id === item.id).product;
            setSelectedRelatedProduct(findProduct);

            setShowModal(true);

        }

        const hideModal = () => {
            setShowModal(false);
        }

        console.log(showModal)

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
                            <div key={key} onClick={() => setSelectedProduct(item.id)}style={{border: '1px solid gray'}} className={css.productItem}>

                                <button onClick={() => openModal(item)}>
                                <i className="far fa-star star"></i>
                                </button>

                                {item.photos[0].thumbnail_url ? <div className={css.productImageContainer}><img src={item.photos[0].thumbnail_url}/></div> :
                                <div className={css.productImageContainer}>
                                    <img className={css.noImg} src={noImgFound}/> </div>}
                                <p>{related.find(_ => _.product.id === +item.id).product.category}</p>
                                <h5>{item.name}</h5>

                                {item.sale_price ?  <p className={css.lineThrough}>${item.original_price}</p> : <p className={css.nolineThrough}>${item.original_price}</p>}

                                {item.sale_price !== null ? <p className={css.salePrice}>{item.sale_price}</p> : null}
                                {/* <ReviewAverage average={related.find(each => each.product.id === item.id).rate}/> */}


                            </div>
                        ))
                    }

                </div>
                {showModal ? <Modal cardData={selectedRelatedProduct} productData={productFeature}  setShowModal={setShowModal}/> : null}

            </div>
            </>
        );
    // }, [related, firstItemIndexToShow, showModal, productFeature])

}


export default Relate;




