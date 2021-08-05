import React from 'react';
import css from './SocialMedia.module.css';
import $ from 'jquery'

const SocialMedia = (props) => {
  // $(document).ready(function () {
  //     $('.fb-share').click(function (e) {
  //       e.preventDefault();
  //       window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  //       return false;
  //     });
  //   });
  const fbClick = (e) => {
    window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse", 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0')
  }
  const twClick = (e) => {
    window.open("https://twitter.com/intent/tweet", 'twShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0')
  }
  const pnClick = (e) => {
    window.open("https://www.pinterest.com/pin/create/button/", 'pnShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0')
  }

  return (
    <div className={css.social}>
      <span className="fb-share" onClick={(e) => fbClick(e)}>
        <i style={{ color: "#4267B2" }} alt="facebook" className="fab fa-facebook-square fa-3x" ></i>
      </span>
      <span onClick={(e) => twClick(e)}>
        <i style={{ color: "	#1DA1F2" }} alt="twitter" className="fab fa-twitter-square fa-3x"></i>
      </span>
      <span onClick={(e) => pnClick(e)}>
      <i style={{ color: "#E60023" }} alt="pintrest" className="fab fa-pinterest-square fa-3x"></i>
      </span>
    </div>

  )
}
export default SocialMedia;