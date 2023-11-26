import React, { useState, useEffect } from 'react'
import CountrieCard from '../components/CountreyCard/CountrieCard';

const Countres = () => {
     

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

  return (
   <div className="container ">
     <div className='countries flex-wrap d-flex align-items-center justify-content-between mt-5 gap-4 '>
        {
            countries.map(el => {
                return <CountrieCard data={el} />
            })
        }
    </div>
   </div>
  )
}

export default Countres