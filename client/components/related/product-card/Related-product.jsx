import React from 'react';
import ReactDOM from 'react-dom';
import sampleData from '../sample-data';



class Relate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:sampleData
    }
  }

  render() {

    return (
      <div className="card-container">
        {
          this.state.data.dataUrl.map((items, key) => (
            <>
              {items.results.map((item, key) => (
                <>
                  {item.photos[0].thumbnail_url ? <img src={item.photos[0].thumbnail_url} /> : <p>No Photo</p>}
                  <p>{item.name}</p>
                  <h5>{item.name}</h5>
                  <p>{item.original_price}</p>
                </>
              ))}
            </>
          ))
        }
      </div>
    );
  }
}





export default Relate;
