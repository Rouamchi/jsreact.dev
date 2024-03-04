import React from 'react'
import './Map.css'
// import {GoogleApiWrapper} from 'google-maps-react';
function Map() {
  return (
    <>
      <div className='mapSection'>
        <iframe title='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.8328137870462!2d-9.242478870678985!3d32.28947260532327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac21be64498361%3A0xf9ab1ee18b6308c!2sSag!5e0!3m2!1sen!2sma!4v1709559399750!5m2!1sen!2sma"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
}

export default Map