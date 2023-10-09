import React from 'react'
import './Map.css'
// import {GoogleApiWrapper} from 'google-maps-react';
function Map() {
  return (
    <>
      <div className='mapSection'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.824039314667!2d-9.236671221981453!3d32.28970848343173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac26d52cb8cbb5%3A0xd02c242f74b6111d!2z2K_Zg9iq2YjYsSDZhNmI2LHZitiv2Yog2LnYqNivINin2YTYsdit2YrZhSDYo9iu2LXYp9im2Yog2KfZhNij2YXYsdin2LYg2KfZhNmG2YHYs9mK2Kkg2YjYp9mE2LnYtdio2YrYqQ!5e0!3m2!1sfr!2sma!4v1696701043416!5m2!1sfr!2sma"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  )
}

export default Map