import React, {useState} from 'react';
import {dataUrl, related} from '../sample-data';
import css from './card.module.css'
import Button from './cardBtn.jsx'


const Relate = ({cards}) => {

    const [data, setData] = useState(dataUrl);
    const [firstItemIndexToShow, setFirstItemIndexToShow] = useState(0)

    const handlePrevClick = () => {
        setFirstItemIndexToShow(firstItemIndexToShow - 1)
    }
    const handleNextClick = () => {
        setFirstItemIndexToShow(firstItemIndexToShow + 1)
    }

    const dataToShow = data.reduce((acc, newItem) => {
        return [...acc, ...newItem.results.map(item => ({...item, id: newItem.product_id}))]
    }, []);

    return (
        <div className={css.cardContainer}>
            {firstItemIndexToShow !== 0 &&
            <button onClick={handlePrevClick}>prev</button>
            }
            {firstItemIndexToShow !== dataToShow.length - 4 &&
            <button onClick={handleNextClick}>next</button>
            }
            <div className={css.gridContainer}>
                {
                    dataToShow.slice(firstItemIndexToShow, firstItemIndexToShow + 4).map((item, key) => (
                        <div style={{border: '1px solid black'}}>
                            <Button/>
                            {item.photos[0].thumbnail_url ? <img src={item.photos[0].thumbnail_url}/> :
                                <p>No Photo</p>}
                            <p>{related.find(_ => _.id === +item.id).category}</p>
                            <h5>{item.name}</h5>
                            <p>{item.original_price}</p>
                        </div>
                    ))
                }

            </div>

        </div>
    );

}


export default Relate;
////////////////////////////

// const Relate = ({cards}) => {

//     const [data, setData] = useState(dataUrl);
//     const [firstItemIndexToShow, setFirstItemIndexToShow] = useState(0)

//     const handlePrevClick = () => {
//         setFirstItemIndexToShow(firstItemIndexToShow - 1)
//     }
//     const handleNextClick = () => {
//         setFirstItemIndexToShow(firstItemIndexToShow + 1)
//     }

//     const dataToShow = data.reduce((acc, newItem) => {
//         return [...acc, ...newItem.results.map(item => ({...item, id: newItem.product_id}))]
//     }, []);

//     return (
//         <div className={css.cardContainer}>
//             {firstItemIndexToShow !== 0 &&
//             <button onClick={handlePrevClick}>prev</button>
//             }
//             {firstItemIndexToShow !== dataToShow.length - 4 &&
//             <button onClick={handleNextClick}>next</button>
//             }
//             <div className={css.gridContainer}>
//                 {
//                     dataToShow.slice(firstItemIndexToShow, firstItemIndexToShow + 4).map((item, key) => (
//                         <div style={{border: '1px solid black'}}>
//                             <Button/>
//                             {item.photos[0].thumbnail_url ? <img src={item.photos[0].thumbnail_url}/> :
//                                 <p>No Photo</p>}
//                             <p>{related.find(_ => _.id === +item.id).category}</p>
//                             <h5>{item.name}</h5>
//                             <p>{item.original_price}</p>
//                         </div>
//                     ))
//                 }

//             </div>

//         </div>
//     );

// }


// export default Relate;
