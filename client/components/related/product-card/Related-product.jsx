import React, {useState} from 'react';
import {dataUrl, related, review} from '../sample-data';
import css from './card.module.css'
import Modal from '../model/Modal.jsx'


const Relate = ({cards}) => {

    const [data, setData] = useState(dataUrl);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [firstItemIndexToShow, setFirstItemIndexToShow] = useState(0)
    const [salePrice, setSalePrice] = useState(false);


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
        <div className={css.cardContainer}>
            {firstItemIndexToShow !== 0 &&
            <span className={css.btnPrev} onClick={handlePrevClick}>
                <i class="fas fa-chevron-left"></i>
            </span>}


            {firstItemIndexToShow !== dataToShow.length - 4 &&
            <span className={css.btnNext} onClick={handleNextClick}>
            <i class="fas fa-chevron-right slide"></i>
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
                                <img className={css.noImg} src={'https://storiavoce.com/wp-content/plugins/lightbox/images/No-image-found.jpg'}/> </div>}
                            <p>{related.find(_ => _.id === +item.id).category}</p>
                            <h5>{item.name}</h5>

                            {item.sale_price ?  <p className={css.lineThrough}>${item.original_price}</p> : <p>${item.original_price}</p>}

                            {item.sale_price !== null ? <p className={css.salePrice}>{item.sale_price}</p> : null}

                        </div>
                    ))
                }

            </div>
            <Modal productData={selectedProduct} showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );

}


export default Relate;




