import React, {useState, useEffect} from 'react';

import Image from '../Image/Image.jsx';

// class Gallery extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       main: this.props.style.photos[0]
//     };
//   }
//   handlePhotoClick(event, data) {
//     this.setState({
//       main: data
//     })
//   }

//   render() {
//     let key = -1;
//     return (
//       <div>
//         <img src={this.state.main.url} style={{ width: 400, height: 600 }} />
//         {this.props.style.photos.map((current) => {
//           key++;
//           return (<Image key={key} photo={current} handlePhotoClick={this.handlePhotoClick.bind(this)} />)
//         })}
//       </div>
//     )
//   }
// }
const Gallery = (props) => {

  let key = -1;
  return (
    <div>
      {props.style.photos.map((current) => {
        key++;
        return (<Image key={key} photo={current} handlePhotoClick={props.handlePhotoClick} />)
      })}
      <img src={props.main.url} style={{ width: 400, height: 600}} />
    </div>
  )
}
export default Gallery;