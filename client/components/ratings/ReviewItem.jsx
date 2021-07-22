import React from 'react';
const moment = require('moment');

function ReviewItem(props) {
  return (
    <table border="1px" width="750" height="250">
      <tbody>
        <tr>
          <td>Star Rating: {props.rating}</td>
          <td>User: {props.author}</td>
          <td>Created: {moment(props.date).format("MMMM, Do YYYY")}</td>
        </tr>
        <tr>
          <td colSpan="3">{props.summary}</td>
        </tr>
        <tr>
          <td colSpan="3">{props.body}</td>
        </tr>
        {props.recommend === true &&
          <tr>
            <td colSpan="3"><u>I recommend this product</u></td>
          </tr>
        }
        {props.response !== null &&
          <tr>
            <td>{props.response}</td>
          </tr>
        }
        <tr>
          <td>Helpful?</td>
          <td><a href="" target="_blank">Yes</a>: {props.helpfulness}</td>
          <td><a href="" target="_blank">Report</a></td>
        </tr>
        <tr>
          {props.photos.map((photo) =>
            <td key={photo.id}><img src={photo.url} height="100" width="100"/></td>
          )}
        </tr>
      </tbody>
    </table>
  );
}

export default ReviewItem;
