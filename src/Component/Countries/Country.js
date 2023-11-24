import React from 'react';

const Country = (country) => {

    //console.log(country.country);
    let design={border:'1px  red', margin:'10px', padding:'10px',background:"pink", borderRadius:'5px'};
    return (
        <div className='col-12 col-md-6 col-lg-4' style={design}>
           <h1>Name:{country.country.name.common}</h1> 
           <p>Capital:{country.country.capital}</p>
           <p>Population:{country.country.population}</p>
           <p>{country.country.continents[0]}</p>
           <img src={country.country.flags.png} alt={country.country.name.common} width="200px" height="200px"/>
        </div>
    );
};

export default Country;