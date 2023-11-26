import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MoreInfo = () => {
    const {countryName} = useParams()
    const {country, setCountry} = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])
  return (
    <div className='container'>
        <div className="more-info">
            {
                country && <div className="details">
                    <img src={country.flags?.svg} width={400} alt={country.flags?.svg} />
                </div>
            }
        </div>
    </div>
  )
}


