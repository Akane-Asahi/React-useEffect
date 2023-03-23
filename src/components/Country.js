import React from "react";
import './Country.css';

export default function Country(prop) {
  // console.log("Prop, which are actually country", prop);
  const data = prop.countries;
  // console.log("Flag ", data.flags.png, "name ", data.name.common);
  return(
    <div className='container' style={{ display: 'flex', gap: '15px' }}>
          <a className="card" href="https://www.behance.net/aetelota2b1" taget="_blank">
          <div className="card__background" style={{ backgroundImage:`url(${data.flags.svg})` }}></div>
          <div className="card__shadow"></div>
          <div className="card__info">
            <div className="card__name">{data.name.common}</div>
            <div className="card__about"><span className="age">{data.subregion}</span>Category: <span className="country">{data.region}</span></div>
            <div className="card__description">{data.name.official} - {data.name.common}</div>
          </div>
          <div className="card__follow"><span><a href={data.maps.googleMaps}>Google Map</a></span></div></a>
  </div>
  )
}
