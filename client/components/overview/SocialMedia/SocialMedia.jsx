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

  return (
    <div className={css.social}>
      <a className="fb-share" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse">
        <i style={{ color: "#4267B2" }} alt="facebook" className="fab fa-facebook-square fa-3x" ></i>
      </a>
      <i style={{ color: "	#1DA1F2" }} alt="twitter" className="fab fa-twitter-square fa-3x"></i>
      <i style={{ color: "#E60023" }} alt="pintrest" className="fab fa-pinterest-square fa-3x"></i>
    </div>

  )
}
export default SocialMedia;