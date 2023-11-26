import React from 'react'
import { generatePath } from 'react-router-dom';
import { uid } from 'uid'
const id = uid();



const CountrieCard = ({data}) => {
  return (
    <div key={id} className="card" style={{width: "18rem"}}>
  <img src={data.flags?.svg} className="card-img-top" alt={data.name.official}/>
  <div className="card-body">
    <h5 className="card-title">{data.name.official}</h5>
    <p className="card-text">Aholisi {data.population} </p>
    <a href={`/${data.name.official}`} className="btn btn-primary">Batafsil</a>
  </div>
</div>
  )
}

export default CountrieCard