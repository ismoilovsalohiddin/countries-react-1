import "./style.css"
import { useState, useEffect } from "react"
function Cards(){
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data))
    },[])
    return(
        <ul className="countries__list">
            {
                countries.map((country)=>{
                    return(
                        <li className="countries__item">
                            <img className="countries__item-img" src={country.flags.png} alt="flag"/>
                            <h2 className="countries__item-heading">{country.name.common}</h2>
                            <dl className="countries__info">
                                <dt className="dt">Population:</dt>
                                <dd className="dd"> {country.population}</dd>
                        
                                <dt className="dt">Region:</dt>
                                <dd  className="dd">{country.region}</dd>
                        
                                <dt className="dt">Capital:</dt>
                                <dd  className="dd">{country.capital}</dd>
                            </dl>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Cards