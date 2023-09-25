import React from 'react'


const Banner = ({imageSource, showText}) => {
   return (
    <div className="kasa-banner">
        <img className="kasa-falaise" src={imageSource} alt="falaise"/>
        {showText && <p className="kasa-falaise-text">Chez vous, partout et ailleurs</p>}
    </div>
   )
  }

  export default Banner