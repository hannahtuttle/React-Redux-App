import React from 'react'

import Photo from './photos.js'


const Brewery = props => {

    console.log('props.breweries',props.place)
    return (
        <div className='breweries'>
            <h3>{props.place.name}</h3>
            <Photo source={props.photos}/>
            <p>{props.place.street}</p>
            <p>{props.place.city}</p>
            <p>{props.place.state}</p>
            <p>{props.place.postal_code}</p>
            <p>{props.place.country}</p>
            <p>Check us out <a href={props.place.website_url}>here.</a> </p>
        </div>
    )
}

export default Brewery;