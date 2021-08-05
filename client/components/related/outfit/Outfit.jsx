import React, {useState, useEffect, useContext} from 'react';
import css from './outfit.module.css'
import MainContext from '../../shared/context/MainContext.js';
import ReviewAverage from '../../overview/ReviewAverage/ReviewAverage.jsx';





const Outfit = (props) => {
//selected product, handle getStyle by Id, handle get rate by id
//just change the selecte dproduct to the new product
  const [firstItemIndexToShow, setFirstItemIndexToShow] = useState(0);
  const { outfits, addOutfit, removeOutfit, clickListener } = useContext(MainContext);
  // console.log(outfits.slice(0,4))
  const handlePrevClick = () => {
    setFirstItemIndexToShow(firstItemIndexToShow - 1)
  }
  const handleNextClick = () => {
    setFirstItemIndexToShow(firstItemIndexToShow + 1)
  }

  const component = 'Outfit Component'

  return (
    <>
    <h3>YOUR OUTFIT</h3>


    <div className={css.cardContainer} onClick={(e) => clickListener(e, component)}>
                {firstItemIndexToShow !== 0&&
                <span className={css.btnPrev} onClick={handlePrevClick}>
                    <i className="fas fa-chevron-left"></i>
                </span>}


                {firstItemIndexToShow !== outfits.length - 3 &&
                <span className={css.btnNext} onClick={handleNextClick}>
                <i className="fas fa-chevron-right slide"></i>
            </span>
                }
                <div className={css.gridContainer}>

                <div onClick={addOutfit} id={'addOutfit'} className={`${css.addBtn}`} style={{border: '1px solid gray'}}>
                   <h4>Add to Outfit</h4>
                    <i className={'fas fa-plus'}></i>
                 </div>

                    {
                        outfits.slice(firstItemIndexToShow, firstItemIndexToShow + 3).map((item, key) => (
                            <div key={key}
                            style={{border: '1px solid gray'}} className={css.productItem}>

                                <button aria-label="button" id={'outfitCloseBtn'}className= {css.closingBtn}onClick={() => {

                                  removeOutfit(item.style.style_id)
                                  }}>
                                <i className="fas fa-times"></i>
                                </button>

                                {item.style.photos[0].thumbnail_url ? <div  className={css.productImageContainer}><img  alt='outfit img' src={item.style.photos[0].thumbnail_url}/></div> :
                                <div className={css.productImageContainer}>
                                    <img alt='no img found'className={css.noImg} src={noImgFound}/> </div>}
                                    <div className={css.cardInfo}>
                                      <p className={css.category}>{item.product.category}</p>
                                      <p className={css.name}>{item.product.name}</p>

                                      {item.style.sale_price ?  <p className={css.lineThrough}>${item.style.original_price}</p> : <p className={css.nolineThrough}>${item.style.original_price}</p>}

                                      {item.style.sale_price !== null ? <p className={css.salePrice}>{item.style.sale_price}</p> : null}
                                      <ReviewAverage  average={item.rate}/>
                                   </div>


                            </div>
                        ))
                    }

                </div>
            </div>


    </>

  )

}



export default Outfit;


