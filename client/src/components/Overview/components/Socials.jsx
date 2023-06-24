import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa'

import {FaTwitterSquare} from 'react-icons/fa';
import {BsPinterest} from 'react-icons/bs';
const Socials = ({slogan}) => {
  return (
    <div>
      <div>
        <FaFacebookSquare/>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.chernealtovise.com/store/p563/Cameo_Onesie.html" target="_blank" rel="nofollow noopener">Share on FaceBook</a>
      </div>

      <div>
        <FaTwitterSquare/>
        <a href="https://twitter.com/intent/tweet?url=https://www.chernealtovise.com/store/p563/Cameo_Onesie.html&text=Check%20this%20out%21&via=ETE-commerce" target="_blank" rel="noreferrer">Share on Twitter</a>
      </div>
      <div>
        <BsPinterest/>

        <a href="https://www.pinterest.com/pin/create/button?url=https://www.chernealtovise.com/store/p563/Cameo_Onesie" target="_blank" rel="nofollow noopener">Share on Pinterest</a>
      </div>

    </div>
  )
}

export default Socials;