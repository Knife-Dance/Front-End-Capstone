import React from 'react';


class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.filteredStars = [];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(star) {
    let index = this.filteredStars.indexOf(star);
    if (index === -1) {
      this.filteredStars.push(star);
      this.props.handleFilter(star);
    } else {
      this.filteredStars.splice(index, 1);
      this.props.handleRemove(star);
    }
  }


  render() {
    const recommendTrue = Number(this.props.meta.recommended.true);
    const recommendFalse = Number(this.props.meta.recommended.false);
    const recommendPercent = Math.floor(recommendTrue / (recommendTrue + recommendFalse) * 100);
    return (
      <div>
        <h3>Ratings & Reviews</h3>
        <p>{recommendPercent}% of reviews recommend this product</p>
        <table border="1px">
          <tbody>
            <tr>
              <td onClick={() => this.handleClick(5)}>5 stars</td>
              <td>percent</td>
            </tr>
            <tr>
              <td onClick={() => this.handleClick(4)}>4 stars</td>
              <td>percent</td>
            </tr>
            <tr>
              <td onClick={() => this.handleClick(3)}>3 stars</td>
              <td>percent</td>
            </tr>
            <tr>
              <td onClick={() => this.handleClick(2)}>2 stars</td>
              <td>percent</td>
            </tr>
            <tr>
              <td onClick={() => this.handleClick(1)}>1 stars</td>
              <td>percent</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReviewBreakdown;