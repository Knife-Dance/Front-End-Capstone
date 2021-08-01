import React from 'react';
import css from './SocialMedia.module.css';

const SocialMedia = (props) => (
  <div className={css.social}>
    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse">
      <i style={{color: "#4267B2"}} className="fab fa-facebook-square fa-3x" ></i>

    </a>
    <i style={{color: "	#1DA1F2"}} className="fab fa-twitter-square fa-3x"></i>
    <i style={{color: "#E60023"}} className="fab fa-pinterest-square fa-3x"></i>
  </div>

)

export default SocialMedia;